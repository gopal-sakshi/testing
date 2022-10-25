import { Component, OnInit } from '@angular/core';
import { SimpleExpressService } from '../../services/simple-express.service';

@Component({
  selector: 'app69-soap14',
  templateUrl: './soap14.component.html',
  styleUrls: ['./soap14.component.scss']
})
export class Soap14Component implements OnInit {

  constructor(private simpleExpressService:SimpleExpressService) { }

  ngOnInit(): void {
  }

  doStuff1() {
    this.simpleExpressService.soapProtocol().subscribe(res => {
      console.log(res);
    })
  }

}
