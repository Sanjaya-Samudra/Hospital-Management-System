import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Patient } from '../../model/Patient';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-manage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './patient-manage.component.html',
  styleUrl: './patient-manage.component.css'
})
export class PatientManageComponent {

  public patientList: Patient[] = [];

  constructor(private http: HttpClient) {
    this.loadPatient();
  }

  loadPatient() {
    this.http.get<Patient[]>("http://localhost:8080/patient/get-all").subscribe(data => {
      data.forEach(obj => {
        console.log(obj);
        this.patientList.push(obj);
      })
    })

    console.log(this.patientList);

  }

  deletePatient(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/patient/delete-by-id/${id}`).subscribe(data => {
          this.loadPatient();
        })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }

  public selectedPatient: any = {};

  selectPatient(patient: any) {
    console.log(patient);

    this.selectedPatient = patient;

  }

  updatePatient() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/patient/update", this.selectedPatient).subscribe(res => {
          Swal.fire("Saved!", "", "success");
        })

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  }
}
