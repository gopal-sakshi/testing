import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app69-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {

  @Input() bodyText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
