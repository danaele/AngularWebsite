import { Component } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router ) {}
  title = 'app works!';

  navLinks = [
    {
      path : "dashboard",
      label : "Dashboard",
      icon : "dashboard"
    },
    {
      path : "cv",
      label : "CV",
      icon : "assignment"
    },
    {
      path : "travels",
      label : "Travels",
      icon : "card_travel"
    },
    {
      path : "games",
      label : "Games",
      icon : "videogame_asset"
    },
    {
      path : "contact",
      label : "Contact",
      icon : "account_box"
    },
  ]
}
