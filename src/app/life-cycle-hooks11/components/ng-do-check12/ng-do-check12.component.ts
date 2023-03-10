import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-check12',
  templateUrl: './ng-do-check12.component.html',
  styleUrls: ['./ng-do-check12.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDoCheck12Component implements OnInit {

  @Input() input1:any;
  @Input() input2:any;
  @Input() input3:any;
  

  constructor() { }

  ngOnInit(): void {
  }


}
