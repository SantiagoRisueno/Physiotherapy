/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package azurClasses;

/**
 *
 * @author Erick
 */
public class Customer extends Person{
    private String pathology;
    private String treatingPhysician;
    private String background;

    public Customer(String pathology, String treatingPhysician, String background, String ci, String name, int age, String address, String cellphone, String email, String password, Boolean admin) {
        super(ci, name, age, address, cellphone, email, password);
        this.pathology = pathology;
        this.treatingPhysician = treatingPhysician;
        this.background = background;
    }

    public Customer(String ci, String name, int age, String address, String cellphone, String email, String password) {
        super(ci, name, age, address, cellphone, email, password);
        this.pathology = "";
        this.treatingPhysician = "";
        this.background = "";
    }

    public Customer(String pathology, String treatingPhysician, String background) {
        this.pathology = pathology;
        this.treatingPhysician = treatingPhysician;
        this.background = background;
    }

    public String getPathology() {
        return pathology;
    }

    public void setPathology(String pathology) {
        this.pathology = pathology;
    }

    public String getTreatingPhysician() {
        return treatingPhysician;
    }

    public void setTreatingPhysician(String treatingPhysician) {
        this.treatingPhysician = treatingPhysician;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    
    
    
}
