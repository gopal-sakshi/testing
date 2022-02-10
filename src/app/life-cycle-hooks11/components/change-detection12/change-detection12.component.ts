import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { of } from 'rxjs';

@Component({
  selector: 'app-change-detection12',
  templateUrl: './change-detection12.component.html',
  styleUrls: ['./change-detection12.component.scss']
})
export class ChangeDetection12Component implements OnInit {

  playerName: string;
  club: string;
  isLoaded12: boolean = false;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private ngZone: NgZone,
    private bottomSheetRef: MatBottomSheetRef<ChangeDetection12Component>
  ) { }

  ngOnInit(): void {
    console.log("isLoaded12 is", this.isLoaded12);
    this.playerName = this.data.playerName;
    this.club = this.data.club;

    this.doStuff();
  }

  async doStuff() {

    // setTimeout(() => {
    //   this.isLoaded12 = true;
    // }, 1000);
    const img12 = 'https://en.wikipedia.org/wiki/Elephant#/media/File:Loxodontacyclotis.jpg'
    const response = await fetch(img12);
    await this.someAsyncFunction();

    this.ngZone.runOutsideAngular(()=> {
     // this.isLoaded12 = true;                 // view not updated... because, its run outside Angular
    });                                           // we show "not Modric"

    this.isLoaded12 = true;                // view updated... we show "Modric"
    console.log(this.isLoaded12);
  }

  someAsyncFunction() {
    var count = 10000;

    setTimeout(()=> {
      console.log("waited 5 seconds");
    }, 5000)

    return new Promise( resolve => {
      setTimeout(()=> {
        console.log("promise resolved after 2 seconds");
      },2000);
    })
  }


  cancel() {
    this.bottomSheetRef.dismiss();
  }

}
