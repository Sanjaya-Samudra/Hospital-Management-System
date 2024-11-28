import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report-root',
  standalone: true,
  imports: [RouterLink,FormsModule,RouterOutlet],
  templateUrl: './report-root.component.html',
  styleUrl: './report-root.component.css'
})
export class ReportRootComponent {

}
