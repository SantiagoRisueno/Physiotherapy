
import dbManage.DBManager;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

/**
 *
 * @author nicol
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         DBManager db=new DBManager("AZUR","assignament");
        for(int i = 0; i <  db.getAppointments("1753420080").size(); i++) {
           System.out.println(db.getAppointments("1753420080").get(i).getCustomer());
        }
    }
    
}
