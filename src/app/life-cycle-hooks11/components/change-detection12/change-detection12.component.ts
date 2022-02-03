import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

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
    private bottomSheetRef: MatBottomSheetRef<ChangeDetection12Component>
  ) { }

  ngOnInit(): void {
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
    this.isLoaded12 = true;
  }

  cancel() {
    this.bottomSheetRef.dismiss();
  }

}
