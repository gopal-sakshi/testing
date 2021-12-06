import { Component, OnInit } from '@angular/core';
import { Confirmable } from '../../decorators/confirmbale.decorator';

@Component({
  selector: 'app-custom-decorator12',
  templateUrl: './custom-decorator12.component.html',
  styleUrls: ['./custom-decorator12.component.css']
})
export class CustomDecorator12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Confirmable
  // deleteItem() {
  //   console.log("An item was deleted");
  // }

  @Confirmable({
    title: 'Are you sure - customised', 
    html: 'Do you want to delete this item?', 
    icon: 'warning'
  })
  deleteItem(): void {
    console.log("An item was deleted");
  }

}
    function deleteLogs() {
      throw new Error('Function not implemented.');
    }

