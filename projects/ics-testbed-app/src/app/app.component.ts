import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IcsSideMenuComponent, TitleColor} from 'ics-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IcsSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ics-testbed-app';
  TitleColor = TitleColor;

  isAuthenticated = signal(false);
}
