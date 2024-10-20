package edu.icet.service.impl;

import edu.icet.dto.Appointment;
import edu.icet.entity.AppointmentEntity;
import edu.icet.repository.AppointmentRepository;
import edu.icet.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AppointmentServiceImpl implements AppointmentService {

    final AppointmentRepository repository;
    final ModelMapper mapper;

    @Override
    public void addAppointment(Appointment appointment) {
        //log.info(appointment.toString());
        repository.save(mapper.map(appointment, AppointmentEntity.class));
    }

    @Override
    public Boolean deleteById(Integer id) {
        repository.deleteById(id);
        return true;
    }

}
