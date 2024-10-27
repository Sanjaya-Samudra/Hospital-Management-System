package edu.icet.controller;

import edu.icet.dto.Appointment;
import edu.icet.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@RequiredArgsConstructor
public class AppointmentController {

    final AppointmentService appointmentService;

    @PostMapping("/add-appointment")
    @ResponseStatus(HttpStatus.CREATED)
    public void addAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @PutMapping("/update-appointment")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @DeleteMapping("/delete-appointment/{id}")
    public Boolean deleteAppointment(@PathVariable Integer id){
        return appointmentService.deleteById(id);
    }

    @GetMapping("/view-all-appointments")
    public List<Appointment> getAll(){
        return appointmentService.getAll();
    }

    @GetMapping("/get-appointment-by-id/{id}")
    public Appointment getAppointmentById(@PathVariable Integer id){
        return appointmentService.getAppointmentById(id);
    }

    @GetMapping("/get-appointment-by-patient-id/{id}")
    public List<Appointment> getAppointmentByPatientId(@PathVariable Integer id){
        return appointmentService.getAppointmentByPatientId(id);
    }

    @GetMapping("/get-appointment-by-admin-id/{id}")
    public List<Appointment> getAppointmentByAdminId(@PathVariable Integer id){
        return appointmentService.getAppointmentByAdminId(id);
    }

    @GetMapping("/get-appointment-by-type/{type}")
    public List<Appointment> getAppointmentByType(@PathVariable String type){
        return appointmentService.getAppointmentByType(type);
    }


}
