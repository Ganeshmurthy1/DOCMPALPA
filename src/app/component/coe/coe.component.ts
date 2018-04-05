import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarEventService } from '../../services/calendar-event.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DashboardService } from '../../services/dashboard.service';
import { DashboardViewModel } from '../../models/dashboardviewmodel.model';
import { CalendarEvent } from '../../models/calendarevent.model';

declare var $: any;
 
@Component({
  selector: 'app-coe',
  templateUrl: './coe.component.html',
  styleUrls: ['./coe.component.css'],
  host: { '(window:keydown)': 'hotkeys($event)' }
})
export class CoeComponent implements OnInit {
  calendarOptions: Options;
  closeResult: string;
  modalData: string;
  dashboardvm: DashboardViewModel;
  displayEvent: any;
  @ViewChild('wizard')
  public wizardRef: TemplateRef<any>;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private dashboardService: DashboardService, protected calendarEventService: CalendarEventService, private modalService: NgbModal) { }

  ngOnInit() {
    // this.calendarEventService.getEvents().subscribe(data => {

    //   this.calendarOptions = {
    //     editable: true,
    //     eventLimit: false,
    //     header: {
    //       left: 'prev,next today',
    //       center: 'title',
    //       right: 'month,agendaWeek,agendaDay,listMonth'
    //     },
    //     events: data
    //   };
    // });

    this.loadData();

  }
  loadData() {

    this.dashboardService.getDashboardItems().subscribe(item => this.onDataLoad(item));

  }
  onDataLoad(dashboardViewModel: DashboardViewModel) {
    this.dashboardvm = dashboardViewModel;
    debugger;
    console.log(dashboardViewModel.itemofInterestViewModel);
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: this.dashboardvm.calendarEventViewModel
    };
  }
  open(content) {


    this.modalService.open(content, { size: 'lg' });
    // this.modalService.open(content).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    // });
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
    this.dashboardService.getcalendarEventDetail(this.displayEvent.event.id).subscribe(item => this.onCalendarEventDetail(item));
    console.log(this.displayEvent);
  }
  onCalendarEventDetail(calendarEvent: CalendarEvent) {
    console.log(calendarEvent);
  }
  hotkeys(event) {
    // control+ y key to open the popup
    if (event.keyCode == 89 && event.ctrlKey) {
      this.modalOpen();
    }
  }


  modalOpen() {
    console.log("asdfsdfsdfsdf");
    //  this.modalData = "Control plus y is being clicked to open the modal popup";
    // this.modalService.open( this.modalData);
    this.modalService.open(this.wizardRef);

  }

}

