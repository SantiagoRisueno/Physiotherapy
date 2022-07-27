/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package ec.edu.espe.azur.controller;

import ec.edu.espe.azur.model.Appointment;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Erick
 */
@Path("appointment")
public class AppointmentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AppointmentResource
     */
    public AppointmentResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.azur.controller.AppointmentResource
     * @return an instance of ec.edu.espe.azur.model.Appointment
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Appointment getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of AppointmentResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Appointment content) {
    }
}
