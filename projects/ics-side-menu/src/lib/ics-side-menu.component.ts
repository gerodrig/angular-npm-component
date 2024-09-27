import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  blue = 'text-blue-500',
  green = 'text-green-500',
  yellow = 'text-yellow-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'ics-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ics-side-menu.component.html',
  styles: ``,
})
export class IcsSideMenuComponent {
  public isAuthenticated = input(false);
  title = input<string>('Gerardo');
  subTitle = input<string>('ICS');

  titleColor = input<TitleColor>(TitleColor.purple);

  public onSignOut = output();
  public onSignIn = output();
}
