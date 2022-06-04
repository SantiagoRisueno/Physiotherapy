/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.azur.model;

import com.mongodb.internal.connection.Time;
import java.util.Date;

/**
 *
 * @author santy
 */
public class Appointment {
   private int idAppointment;
   private Date date;
   private Time hour;
   private Customer customer;
   private Physiotherapist doctor;

    public Appointment(int idAppointment, Date date, Time hour, Customer customer, Physiotherapist doctor) {
        this.idAppointment = idAppointment;
        this.date = date;
        this.hour = hour;
        this.customer = customer;
        this.doctor = doctor;
    }

    public Appointment() {
        this.idAppointment = 0;
        this.date = null;
        this.hour = null;
        this.customer = null;
        this.doctor = null;
    }

    public int getIdAppointment() {
        return idAppointment;
    }

    public void setIdAppointment(int idAppointment) {
        this.idAppointment = idAppointment;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getHour() {
        return hour;
    }

    public void setHour(Time hour) {
        this.hour = hour;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Physiotherapist getDoctor() {
        return doctor;
    }

    public void setDoctor(Physiotherapist doctor) {
        this.doctor = doctor;
    }
   

    
}
