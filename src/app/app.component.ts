import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartementComponent } from './components/departement/departement.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'school-management';
}
