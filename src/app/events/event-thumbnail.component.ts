import {Component, Input} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <event-address [location]="event.location"></event-address>
      </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
}
