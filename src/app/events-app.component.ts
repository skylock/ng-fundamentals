import { Component } from '@angular/core';

@Component({
  selector: 'ngf-app',
  template: `
    <ngf-nav-bar></ngf-nav-bar>
    <ngf-events-list></ngf-events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
