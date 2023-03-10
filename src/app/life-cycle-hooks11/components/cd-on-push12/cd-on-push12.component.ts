import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-cd-on-push12',
  templateUrl: './cd-on-push12.component.html',
  styleUrls: ['./cd-on-push12.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdOnPush12Component implements OnInit {
  @Input() name23;
  @Input() obj22;
  @Input() obj23;
  
  person:any = { height: 'short', color: 'dark'}
  originalValue1:string = '70kg_in_2022';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  update24() {
    setTimeout(() => {
      this.originalValue1 = '85kg_in_2023';
      this.person = { height: 'very tall', color: 'very fair' }
      console.log(this.originalValue1);
      console.log(this.person);
    }, 2000);
    
  }

  update23() {
    // this.originalValue1 = '80kg_in_2023';
    // this.person.height = 'tall'; this.person.color = 'fair';

    setTimeout(() => {
      this.originalValue1 = '80kg_in_2023';
      this.person.height = 'tall'; this.person.color = 'fair';
      console.log(`change detection strategy must be set to "OnPush"`);
      console.log('now originalValue1 updated to ', this.originalValue1);
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
