import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex12',
  templateUrl: './flex12.component.html',
  styleUrls: ['./flex12.component.scss']
})
export class Flex12Component implements OnInit {

    date23: any;
    santiagoBernabeuCapacity: number = 81004;
    
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
        this.date23 = new Date().toISOString();
        // console.log(this.date23);
        // console.log((this.date23.slice(17,19) / 30) > 1);
    }, 1000);
    
    // this.date23.slice(17,19) ===> gives seconds
  }

}
