import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-check12',
  templateUrl: './ng-do-check12.component.html',
  styleUrls: ['./ng-do-check12.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDoCheck12Component implements OnInit {

  @Input() input1:any;
  @Input() input2:any;
  @Input() input3: any;
  
  originalValue1:string = 'old value';
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  startTimeout() {
    setTimeout(() => {
      this.originalValue1 = 'new Value';
      console.log('now originalValue1 updated to ',this.originalValue1);
    },2000)
  }

  // There exist three methods to manually trigger change detections..
    // even its OnPush ---> we can manually trigger change detection 

  // APPROACH I ---> runs change detection on this view and its children... if detach(), something
  trigger1() { this.changeDetectorRef.detectChanges(); }   

  // APPROACH II ---> does not trigger change detection but marks all OnPush ancestors as to be checked once
    // either as part of the current or next change detection cycle
  trigger2() { this.changeDetectorRef.markForCheck(); }

  // APPROACH III ---> 
  trigger3() { }

}
