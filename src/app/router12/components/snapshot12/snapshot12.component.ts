import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snapshot12',
  templateUrl: './snapshot12.component.html',
  styleUrls: ['./snapshot12.component.css']
})
export class Snapshot12Component implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    
  }

}
