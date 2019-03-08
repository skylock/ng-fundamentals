import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <event-address [location]="event.location"></event-address>
        <div style="margin-top: 20px">
          <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
        </div>
      </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
}
