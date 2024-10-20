package edu.icet.service;

import edu.icet.dto.Appointment;

public interface AppointmentService {

    void addAppointment(Appointment appointment);

    Boolean deleteById(Integer id);
}
