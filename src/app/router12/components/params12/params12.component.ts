import { Component, OnInit } from '@angular/core';
import { GetItemDetailsService } from '../../services/get-item-details.service';
import { itemDetail } from '../classes/item-detail';

@Component({
  selector: 'app-params12',
  templateUrl: './params12.component.html',
  styleUrls: ['./params12.component.scss']
})
export class Params12Component implements OnInit {

  // products44:itemDetail = [];
  products44:any = [];
  constructor(private getItemDetails:GetItemDetailsService) { }

  

  ngOnInit(): void {
    this.getItemDetails.getAllItemsShort().subscribe(res => {
      this.products44 = res;
    })
  }

}
