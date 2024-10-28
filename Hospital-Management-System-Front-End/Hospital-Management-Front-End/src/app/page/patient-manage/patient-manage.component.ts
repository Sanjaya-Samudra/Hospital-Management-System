import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-manage',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgFor],
  templateUrl: './patient-manage.component.html',
  styleUrl: './patient-manage.component.css'
})
export class PatientManageComponent {

  public patientList: any=[];

  constructor(private http:HttpClient){
    this.loadPatient();
  }

  loadPatient(){
    this.http.get("http://localhost:8080/patient/get-all").subscribe(data=>{
      console.log(data);
      this.patientList=data;
    })
  }
}
