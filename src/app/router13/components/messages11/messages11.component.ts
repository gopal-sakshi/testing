import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-messages11',
  templateUrl: './messages11.component.html',
  styleUrls: ['./messages11.component.scss']
})
export class Messages11Component implements OnInit {

  @Input() chosenYear:string;
  @Input() chosenFolder:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.chosenYear) console.log(this.chosenYear);
  }

}
