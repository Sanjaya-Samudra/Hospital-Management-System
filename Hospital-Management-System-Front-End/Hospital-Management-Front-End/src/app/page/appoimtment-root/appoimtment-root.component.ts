import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appoimtment-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './appoimtment-root.component.html',
  styleUrl: './appoimtment-root.component.css'
})
export class AppoimtmentRootComponent {

}
