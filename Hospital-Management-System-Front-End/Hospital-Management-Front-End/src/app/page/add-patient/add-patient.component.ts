import { HttpClient } from '@angular/common/http';
import { Patient } from './../../model/Patient';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  public patient:Patient=new Patient("NUN","NUN","NUN","NUN","NUN","NUN","NUN","NUN","NUN","NUN","NUN");

  constructor(private http:HttpClient){

  }
  addPatient(){
    console.log(this.patient);

    this.http.post("http://localhost:8080/patient/add-patient",this.patient).subscribe(res=>{
      alert("patient added Succsess fully!!")
    })
  }
}
