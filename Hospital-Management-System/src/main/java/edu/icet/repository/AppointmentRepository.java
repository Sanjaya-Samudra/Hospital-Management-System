package edu.icet.repository;

import edu.icet.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Integer> {
    List<AppointmentEntity> findByAdminId(Integer id);

    List<AppointmentEntity> findByPatientId(Integer id);

    List<AppointmentEntity> findByType(String type);
}
