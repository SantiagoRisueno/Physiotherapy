/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.azur.model;

/**
 *
 * @author Erick
 */
public class Person {
    private String ci;
    private String name;
    private int age;
    private String address;
    private String cellphone;
    private String email;
    private String password;

    public Person(String ci, String name, int age, String address, String cellphone, String email, String password) {
        this.ci = ci;
        this.name = name;
        this.age = age;
        this.address = address;
        this.cellphone = cellphone;
        this.email = email;
        this.password = password;
    }

    public Person() {
        this.ci = "";
        this.name = "";
        this.age = 0;
        this.address = "";
        this.cellphone = "";
        this.email = "";
        this.password = "";
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }   
    
}
