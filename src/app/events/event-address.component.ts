import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngf-event-address',
  template: `
    <div>
      <span>Location: {{location.address}}</span>
      <span class="pad-left">{{location.city}}, {{location.country}}</span>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bd362f; }
  `]
})
export class EventAddressComponent {
  @Input() location: any;
}
