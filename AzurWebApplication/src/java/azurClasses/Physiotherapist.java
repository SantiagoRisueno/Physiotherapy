/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package azurClasses;

/**
 *
 * @author Erick
 */
public class Physiotherapist extends Person{
    private String specialty;

    public Physiotherapist(String speciality, String ci, String name, int age, String address, String cellphone, String email, String password, Boolean admin) {
        super(ci, name, age, address, cellphone, email, password);
        this.specialty = speciality;
    }

    public Physiotherapist(String speciality) {
        this.specialty = speciality;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }
    
}
