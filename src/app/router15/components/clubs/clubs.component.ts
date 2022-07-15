import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs:any = [
    { id: 1, name: 'Real Madrid' },
    { id: 2, name: 'Barcelona' },
    { id: 3, name: 'Atletico' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
