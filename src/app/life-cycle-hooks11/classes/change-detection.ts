import { Injector } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ChangeDetection12Component } from "../components/change-detection12/change-detection12.component";

export class ChangeDetection11 {

  bottomSheet:MatBottomSheet;

  // constructor(bottomSheet: MatBottomSheet) {}
      // expected 1 arguments, but got 0
      // an argument for bottomSheet was not provided


  constructor(protected injector: Injector) {
    this.bottomSheet = this.injector.get(MatBottomSheet)
  }

  openSomeComponent() {
    this.bottomSheet.open(ChangeDetection12Component, {
      panelClass: 'p-0',
      data: {
        playerName: 'Modric',
        club: 'Real Madrid',
      }
    });

    /*
      The bottom sheet's HTML is not part of the component's HTML
      It's attached to the document's body... So, "styling bottomsheet within the component" won't work
      may be, you could try ------> ViewEncapsulation.None
    */
  }
}
