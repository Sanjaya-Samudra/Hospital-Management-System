package edu.icet.service;

import edu.icet.dto.Patient;
import edu.icet.entity.PatientEntity;
import edu.icet.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService{

    final PatientRepository repository;
    final ModelMapper mapper;

    List<Patient> patientList = new ArrayList<>();

    @Override
    public List<Patient> getPatient() {

        List<Patient> patients = new ArrayList<>();
        repository.findAll().forEach(patient -> patients.add(mapper.map(patient, Patient.class)));
        return patients;
    }

    @Override
    public void addPatient(Patient patient) {

        repository.save(mapper.map(patient, PatientEntity.class));
    }

}
