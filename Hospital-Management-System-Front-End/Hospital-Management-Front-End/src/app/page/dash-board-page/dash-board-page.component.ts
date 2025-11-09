import { Component, ViewChild } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";
import { HeaderComponent } from "../../common/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-dash-board-page',
  standalone: true,
  imports: [NavComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './dash-board-page.component.html',
  styleUrl: './dash-board-page.component.css'
})
export class DashBoardPageComponent {
  @ViewChild(NavComponent) navComponent!: NavComponent;
  isSidebarCollapsed = false;

  onSidebarCollapsed(collapsed: any) {
    this.isSidebarCollapsed = collapsed as boolean;
  }
}
