import {Component, Input} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [class.green]="true" [ngSwitch]="event?.time">
          Time: {{event.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div *ngIf="event.location">
          <event-address [location]="event.location"></event-address>
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
  @Input() event: any;
}
