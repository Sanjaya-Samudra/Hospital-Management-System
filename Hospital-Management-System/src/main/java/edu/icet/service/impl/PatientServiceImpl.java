package edu.icet.service.impl;

import edu.icet.dto.Patient;
import edu.icet.entity.PatientEntity;
import edu.icet.repository.PatientRepository;
import edu.icet.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {

    final PatientRepository repository;
    final ModelMapper mapper;
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
    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
    @Override
    public List<Patient> searchByName(String name) {
        List<Patient> patients = new ArrayList<>();
        repository.findByName(name).forEach(entity->{
            patients.add(mapper.map(entity,Patient.class));
        });

        return patients;
    }

    @Override
    public List<Patient> searchByAddress(String address) {
        List<Patient> patients = new ArrayList<>();
        repository.findByAddress(address).forEach(entity -> patients.add(mapper.map(entity, Patient.class)));
        return patients;
    }

    @Override
    public List<Patient> searchByCategory(String category) {
        List<Patient> patients = new ArrayList<>();
        repository.findByCategory(category).forEach(entity->{
            patients.add(mapper.map(entity, Patient.class));
        });
        return patients;
    }

    @Override
    public List<Patient> searchByBloodGroup(String bloodGroup) {
        List<Patient> patients = new ArrayList<>();
        repository.findByBloodGroup(bloodGroup).forEach(entity->{
            patients.add(mapper.map(entity, Patient.class));
        });
        return patients;
    }

    @Override
    public List<Patient> searchByContact(String contact) {
        List<Patient> patients = new ArrayList<>();
        repository.findByContact(contact).forEach(entity->{
            patients.add(mapper.map(entity, Patient.class));
        });
        return patients;
    }


}