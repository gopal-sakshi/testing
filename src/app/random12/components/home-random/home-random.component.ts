import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EnvironmentService } from 'src/config/environment.service';

@Component({
  selector: 'app-home-random',
  templateUrl: './home-random.component.html',
  styleUrls: ['./home-random.component.scss']
})
export class HomeRandomComponent implements OnInit {

  showTypescript:boolean = false;
  showDecorators:boolean = false;
  constructor(public env:EnvironmentService, private titleService: Title) { }

  ngOnInit(): void {
    
    console.log("My environment is ");
    console.log(this.env.APP_NAME, this.env.envName, this.env.production);

    this.titleService.setTitle('random12');
  }

}
