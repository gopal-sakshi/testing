import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app69-message00',
  templateUrl: './message00.component.html',
  styleUrls: ['./message00.component.scss']
})
export class Message00Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(res => {
      console.log(res);      
    })

  }

}
