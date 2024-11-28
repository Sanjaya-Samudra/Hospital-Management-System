package edu.icet.controller;

import edu.icet.dto.MedicalReport;
import edu.icet.dto.Patient;
import edu.icet.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/medical-report")
@RequiredArgsConstructor
public class MedicalReportController {

    final MedicalReportService medicalReportService;

    @PostMapping("/add-report")
    public void addMedicalReport(@RequestBody MedicalReport medicalReport){
        medicalReportService.addMedicalReport(medicalReport);
    }

    @GetMapping("/get-reports")
    public List<MedicalReport> getMedicalReports(){
        return medicalReportService.getMedicalReports();
    }

    @GetMapping("/search-by-category/{category}")
    public List<MedicalReport> searchByCategory(@PathVariable String category) {
        return medicalReportService.searchByCategory(category);
    }

    @DeleteMapping("/delete-report/{id}")
    public Boolean deleteReport(@PathVariable Integer id){
        return medicalReportService.deleteRecordById(id);
    }

    @GetMapping("/search-by-id/{id}")
    public List<MedicalReport> searchById(@PathVariable Integer id){
        return medicalReportService.searchById(id);
    }

}
