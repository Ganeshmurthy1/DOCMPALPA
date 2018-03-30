import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CoeComponent } from './component/coe/coe.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FullCalendarModule } from 'ng-fullcalendar'; 
import { CalendarEventService } from './services/calendar-event.service';
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
    AppRoutingModule,
    FullCalendarModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalendarEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
