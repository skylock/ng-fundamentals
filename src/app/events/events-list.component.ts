import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  private events: any;

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
   this.eventService.getEvents().subscribe(events => {
     this.events = events;
   });
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
