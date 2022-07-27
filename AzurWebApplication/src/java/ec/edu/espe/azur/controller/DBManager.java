/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package ec.edu.espe.azur.controller;
import ec.edu.espe.azur.model.Appointment;
import ec.edu.espe.azur.model.Customer;
import ec.edu.espe.azur.model.Physiotherapist;
import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author G401
 */
public class DBManager {
    private MongoDatabase baseDatos;
    private BasicDBObject document = new BasicDBObject();
    private MongoCollection<Document> collection;
    private MongoClient mongo;
    private String nameCollection;
    private Gson gson = new Gson();

    public DBManager(String nameDataBase,String nameCollection) {
        try {
            this.nameCollection = nameCollection;
            MongoClientURI uri=new MongoClientURI("mongodb+srv://root:admin@cluster0.1ewz4.mongodb.net/?retryWrites=true&w=majority");
            mongo = new MongoClient(uri);
            baseDatos = mongo.getDatabase(nameDataBase);
            collection = baseDatos.getCollection(nameCollection);
            System.out.println("DataBase conection sucessfuled");
        } catch (Exception e) {
            System.out.println("DataBase conection failed");
        }
    }   
    public void insertRegister(Customer customer){
        Document doc = new Document();        
        doc.append("ci", customer.getCi());
        doc.append("name", customer.getName());
        doc.append("age",customer.getAge());
        doc.append("address",customer.getAddress());
        doc.append("cellphone",customer.getCellphone());
        doc.append("email",customer.getEmail());
        doc.append("password",customer.getPassword());   
        doc.append("pathology",customer.getPathology());
        doc.append("treatingPhysician",customer.getTreatingPhysician());
        doc.append("background",customer.getBackground()); 
        collection.insertOne(doc); 
        mongo.close();
    }
    public void insertData(Physiotherapist doctor){
        
    }
    public void insertData(Appointment appointment){
        
    }
    public ArrayList<Appointment> getData(){
        ArrayList<Appointment> appointments = new ArrayList<Appointment>();
        MongoCursor<Document> resultDocument = collection.find().iterator();
        while (resultDocument.hasNext()) {
            Document theObj = resultDocument.next();
            String ci=gson.toJson(theObj.get("ci")).replace("\"", "");
            String pass=gson.toJson(theObj.get("password")).replace("\"", "");
            
        }        
        return appointments;
    }
    
    public Boolean validAppointment(Customer customer){
        MongoCursor<Document> resultDocument = collection.find().iterator();
        while (resultDocument.hasNext()) {
            Document theObj = resultDocument.next();
            String ci=gson.toJson(theObj.get("ci")).replace("\"", "");
            if(ci.equals(customer.getCi())){
                return true;
            }
        }        
        return false;
    }
    
    public Boolean validLogin(String _email,String _pass){
        MongoCursor<Document> resultDocument = collection.find().iterator();
        while (resultDocument.hasNext()) {
            Document theObj = resultDocument.next();
            String email=gson.toJson(theObj.get("email")).replace("\"", "");
            String pass=gson.toJson(theObj.get("password")).replace("\"", "");
            if(_email.equals(email) && _pass.equals(pass)){
                return true;
            }
        }        
        return false;
    }
}