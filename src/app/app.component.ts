import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableauDashboardComponent } from "./tableau-dashboard/tableau-dashboard.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableauDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tableau-poc';
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
