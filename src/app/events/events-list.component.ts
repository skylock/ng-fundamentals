import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'ngf-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {

  private events: any;

  constructor(private eventService: EventService) {
    this.events = eventService.getEvents();
  }
}
