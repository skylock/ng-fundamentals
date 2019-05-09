import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { checkDirtyState, CreateEventComponent, EventAddressComponent, EventDetailsComponent, EventListResolver,
          EventRouteActivator, EventService, EventsListComponent, EventThumbnailComponent } from './events';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventAddressComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
