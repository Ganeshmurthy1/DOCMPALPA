import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-of-interest',
  templateUrl: './item-of-interest.component.html',
  styleUrls: ['./item-of-interest.component.css']
})
export class ItemOfInterestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
      
  $(document).on('show','.accordion', function (e) {
    //$('.accordion-heading i').toggleClass(' ');
    $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
   $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
   //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});
}
}
