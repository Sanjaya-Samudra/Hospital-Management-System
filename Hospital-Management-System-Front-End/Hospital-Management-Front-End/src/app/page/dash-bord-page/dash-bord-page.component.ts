import { Component } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-dash-bord-page',
  standalone: true,
  imports: [NavComponent, FooterComponent ,RouterOutlet],
  templateUrl: './dash-bord-page.component.html',
  styleUrl: './dash-bord-page.component.css'
})
export class DashBordPageComponent {

}
