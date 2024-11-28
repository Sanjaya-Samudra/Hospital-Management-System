import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './patient-root.component.html',
  styleUrl: './patient-root.component.css'
})
export class PatientRootComponent {

}
