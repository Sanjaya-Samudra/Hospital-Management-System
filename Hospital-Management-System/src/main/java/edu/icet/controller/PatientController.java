package edu.icet.controller;

import edu.icet.dto.Patient;
import edu.icet.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/patient")
@CrossOrigin
public class PatientController {

    final PatientService service;


    @GetMapping("/get-all")
    public List<Patient> getPatient() {
        return service.getPatient();
    }

    @PostMapping("/add-patient")
    @ResponseStatus(HttpStatus.CREATED)
    public void addPatient(@RequestBody Patient patient) {
        service.addPatient(patient);
    }

    @DeleteMapping("delete-by-id/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable Integer id) {
        service.deleteById(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updatePatient(@RequestBody Patient patient) {
        service.addPatient(patient);
    }

    @GetMapping("/search-by-name/{name}")
    public List<Patient> searchByName(@PathVariable String name) {
        return service.searchByName(name);
    }

    @GetMapping("/search-by-address/{address}")
    public List<Patient> searchByAddress(@PathVariable String address) {
        return service.searchByAddress(address);
    }

    @GetMapping("/search-by-contact/{contact}")
    public List<Patient> searchByContact(@PathVariable String contact) {
        return service.searchByContact(contact);
    }

    @GetMapping("/search-by-category/{category}")
    public List<Patient> searchByCategory(@PathVariable String category) {
        return service.searchByCategory(category);
    }

    @GetMapping("/search-by-blood-group/{bloodGroup}")
    public List<Patient> searchByBloodGroup(@PathVariable String bloodGroup) {
        return service.searchByBloodGroup(bloodGroup);
    }


}