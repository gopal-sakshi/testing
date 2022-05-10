import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app69-conversation11',
  templateUrl: './conversation11.component.html',
  styleUrls: ['./conversation11.component.scss']
})
export class Conversation11Component implements OnInit {

  chosenYear:string;
  chosenFolder:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(res => {
      console.log(res);
      if(res.folder) {this.chosenFolder = res.folder}
      else {this.chosenFolder = '';}
      if(res.year) {this.chosenYear = res.year;}
      else {this.chosenYear = '';}
    })
  }

  ngOnInit(): void {
  }

  messages2021() {
    this.router.navigate(['/router13/inbox/2021'], {queryParams: {name:"gopal"}});
  }

  messages2022() {
    this.router.navigate(['/router13/inbox/2022'], {queryParams: {name:"gopal"}});
  }

}
