import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CoeComponent } from './component/coe/coe.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { CalendarEventService } from './services/calendar-event.service';
import { ConfigurationService } from './services/configuration.service';
import { DashboardEndpoint } from './services/dashboard-endpoint.service';
import { DashboardService } from './services/dashboard.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoeComponent,
    SignInComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConfigurationService, CalendarEventService, DashboardEndpoint, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
