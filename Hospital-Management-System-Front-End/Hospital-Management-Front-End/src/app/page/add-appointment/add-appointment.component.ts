import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../model/Appointment';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  public appointment: Appointment = new Appointment("", "", "", "", "", 0, 0, 0, 0);

  constructor(private http: HttpClient) { }

  bookAppointment() {
    console.log(this.appointment);

    this.http.post("http://localhost:8080/appointment/add-appointment", this.appointment).subscribe(res => {
      alert("appontment Booked!!")
    })
  }
}
