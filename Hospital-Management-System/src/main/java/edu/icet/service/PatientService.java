package edu.icet.service;

import edu.icet.dto.Patient;

import java.util.List;

public interface PatientService {

    List<Patient> getPatient();

    void addPatient(Patient patient);

}
