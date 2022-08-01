import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-join-array',
  templateUrl: './join-array.component.html',
  styleUrls: ['./join-array.component.scss']
})
export class JoinArrayComponent implements OnInit {

  @Input()join23:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.join23) {
      console.log(this.join23);
    }
  }

}
