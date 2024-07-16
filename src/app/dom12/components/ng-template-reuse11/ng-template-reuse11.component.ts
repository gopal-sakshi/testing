import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-ng-template-reuse11',
  templateUrl: './ng-template-reuse11.component.html',
  styleUrls: ['./ng-template-reuse11.component.scss']
})
export class NgTemplateReuse11Component implements OnInit {

  constructor() { }

  socialManagerObject:any = {
    auth: { title: 'Auth', active: 0, inactive: 0, routeTo: '/auth23' },
    subjects: { title: 'subjects', active: 0, inactive: 0, routeTo: '/subjects'},
    styling12: { title: 'styling12', active: 0, inactive: 0, routeTo: '/styling12' },
    services_di: { title: 'services-di', active: 0, inactive: 0, routeTo: '/services-di' },
    design23: { title: 'design23', active: 0, inactive: 0, routeTo: '/design23' },
    random14: { title: 'random14', active: 0, inactive: 0, routeTo: '/random14' }
  }

  ngOnInit(): void { }

}
