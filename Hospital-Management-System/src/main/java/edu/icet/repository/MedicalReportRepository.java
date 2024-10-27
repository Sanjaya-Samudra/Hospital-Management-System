package edu.icet.repository;

import edu.icet.entity.MedicalReportEntity;
import org.springframework.data.repository.CrudRepository;

public interface MedicalReportRepository extends CrudRepository<MedicalReportEntity, Integer> {
}
