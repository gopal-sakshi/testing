import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-project-body-card',
  templateUrl: './project-body-card.component.html',
  styleUrls: ['./project-body-card.component.scss']
})
export class ProjectBodyCardComponent implements OnInit {

  @Input() headerText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
