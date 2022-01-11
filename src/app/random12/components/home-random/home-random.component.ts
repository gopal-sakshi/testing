import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/config/environment.service';

@Component({
  selector: 'app-home-random',
  templateUrl: './home-random.component.html',
  styleUrls: ['./home-random.component.scss']
})
export class HomeRandomComponent implements OnInit {

  constructor(public env:EnvironmentService) { }

  ngOnInit(): void {
    console.log("testing git");
    console.log("My environment is ");
    console.log(this.env.APP_NAME, this.env.envName, this.env.production);
  }

}
