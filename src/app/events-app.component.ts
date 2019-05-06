import { Component } from '@angular/core';

@Component({
  selector: 'ngf-app',
  template: `
    <ngf-nav-bar></ngf-nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
