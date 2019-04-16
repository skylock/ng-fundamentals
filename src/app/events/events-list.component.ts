import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'ngf-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  private events: any[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
