import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app69-club-child',
  templateUrl: './club-child.component.html',
  styleUrls: ['./club-child.component.scss']
})
export class ClubChildComponent implements OnInit {

  clubId:any;
  randomNumber:any;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(res => {
      this.clubId = res.clubId
    });
    console.log('club child constructor called');
  }

  ngOnInit(): void {
    console.log('club child ngOnInit called');
    this.randomNumber = Math.random();
  }

}
