import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './appointment-root.component.html',
  styleUrl: './appointment-root.component.css'
})
export class AppointmentRootComponent {

}
