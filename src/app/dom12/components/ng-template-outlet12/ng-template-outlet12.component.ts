import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet12',
  templateUrl: './ng-template-outlet12.component.html',
  styleUrls: ['./ng-template-outlet12.component.scss']
})
export class NgTemplateOutlet12Component implements OnInit {

  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
