package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MedicalReport {

    private Integer id;
    private String category;
    private String pdfSrc;
    private LocalDate dateTime;
    private Integer patientId;
    private Integer adminId;
    private Integer labNumber;
}
