import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { CreateEventComponent } from './create-event.component';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  resolve() {
    return this.eventService.getEvents().pipe((map(events => events)));
  }
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you want to cancel ?');
  }
  return  true;
}
