package edu.icet.service;

import edu.icet.dto.MedicalReport;

import java.util.List;

public interface MedicalReportService {
    void addMedicalReport(MedicalReport medicalReport);

    List<MedicalReport> getMedicalReports();

    List<MedicalReport> searchByCategory(String category);

    Boolean deleteRecordById(Integer id);

    List<MedicalReport> searchById(Integer id);
}
