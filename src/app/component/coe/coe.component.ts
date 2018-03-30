import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarEventService } from '../../services/calendar-event.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
declare var $: any;
@Component({
  selector: 'app-coe',
  templateUrl: './coe.component.html',
  styleUrls: ['./coe.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'}
})
export class CoeComponent implements OnInit {
  calendarOptions: Options;
  closeResult: string;
  modalData:string;

  @ViewChild('wizard')
  public wizardRef: TemplateRef<any>;  
  
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent; 

  constructor(protected calendarEventService: CalendarEventService,private modalService: NgbModal) { }

  ngOnInit() {
    this.calendarEventService.getEvents().subscribe(data => {
      
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }

  open(content) {
  
   
    this.modalService.open(content,{size:'lg'});
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



  hotkeys(event){
    // control+ y key to open the popup
    if (event.keyCode == 89 && event.ctrlKey){       
       this.modalOpen();
    }
 }


 modalOpen(){
 console.log("asdfsdfsdfsdf");
  //  this.modalData = "Control plus y is being clicked to open the modal popup";
  // this.modalService.open( this.modalData);
  this.modalService.open(this.wizardRef);

}

}

 