import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app69-layout13',
  templateUrl: './layout13.component.html',
  styleUrls: ['./layout13.component.scss']
})
export class Layout13Component implements OnInit {

  // https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(modal: any): void {
    this.modalService.open(modal);
  }


}
