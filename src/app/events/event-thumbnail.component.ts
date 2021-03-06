import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'ngf-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event.price}}</div>
      <div *ngIf="event.location">
        <ngf-event-address [location]="event.location"></ngf-event-address>
      </div>
      <div *ngIf="event.onlineUrl">Online Url: {{event.onlineUrl}}</div>
    </div>
  `,
  styles: [`
    .thumbnail {min-height: 210px}
    .well div { color: #bbb; }
    .green { color: green !important; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    if (isEarlyStart) {
      return ['green', 'bold'];
    } else {
      return [];
    }
  }
}
