import { Component } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-dash-board-page',
  standalone: true,
  imports: [NavComponent, FooterComponent ,RouterOutlet],
  templateUrl: './dash-board-page.component.html',
  styleUrl: './dash-board-page.component.css'
})
export class DashBoardPageComponent {

}
