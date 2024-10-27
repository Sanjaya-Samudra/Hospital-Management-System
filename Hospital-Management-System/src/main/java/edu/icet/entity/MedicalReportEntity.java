package edu.icet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
public class MedicalReportEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String category;
    private String pdfSrc;
    private LocalDate dateTime;
    private Integer patientId;
    private Integer adminId;
    private Integer labNumber;
}
