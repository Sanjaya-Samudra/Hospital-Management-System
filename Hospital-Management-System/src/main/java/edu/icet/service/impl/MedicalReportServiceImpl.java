package edu.icet.service.impl;

import edu.icet.dto.MedicalReport;
import edu.icet.entity.MedicalReportEntity;
import edu.icet.repository.MedicalReportRepository;
import edu.icet.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedicalReportServiceImpl implements MedicalReportService {

    final ModelMapper mapper;
    final MedicalReportRepository repository;


    @Override
    public void addMedicalReport(MedicalReport medicalReport) {
        repository.save(mapper.map(medicalReport, MedicalReportEntity.class));
    }
}
