package edu.icet.service.impl;

import edu.icet.dto.Appointment;
import edu.icet.dto.MedicalReport;
import edu.icet.dto.Patient;
import edu.icet.entity.MedicalReportEntity;
import edu.icet.repository.MedicalReportRepository;
import edu.icet.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicalReportServiceImpl implements MedicalReportService {

    final ModelMapper mapper;
    final MedicalReportRepository repository;


    @Override
    public void addMedicalReport(MedicalReport medicalReport) {
        repository.save(mapper.map(medicalReport, MedicalReportEntity.class));
    }

    @Override
    public List<MedicalReport> getMedicalReports() {
        List<MedicalReport> medicalReportList = new ArrayList<>();
        repository.findAll().forEach(entity -> medicalReportList.add(mapper.map(entity, MedicalReport.class)));
        return medicalReportList;
    }

    @Override
    public List<MedicalReport> searchByCategory(String category) {
        List<MedicalReport> medicalReports = new ArrayList<>();
        repository.findByCategory(category).forEach(entity->{
            medicalReports.add(mapper.map(entity, MedicalReport.class));
        });
        return medicalReports;
    }

    @Override
    public Boolean deleteRecordById(Integer id) {
        repository.deleteById(id);
        return true;
    }

    @Override
    public List<MedicalReport> searchById(Integer id) {
        List<MedicalReport> medicalReports = new ArrayList<>();
        //repository.findById(id).forEach(entity -> medicalReports.add(mapper.map(entity, MedicalReport.class)));
        return medicalReports;
    }
}
