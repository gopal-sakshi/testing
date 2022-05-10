import { Component, OnInit } from '@angular/core';
import { SimpleExpressService } from '../../services/simple-express.service';

@Component({
  selector: 'app69-simple-express',
  templateUrl: './simple-express.component.html',
  styleUrls: ['./simple-express.component.scss']
})
export class SimpleExpressComponent implements OnInit {

  constructor(private simpleExpressService:SimpleExpressService) { }

  ngOnInit(): void {
  }

  showStream() {
    this.simpleExpressService.showStream().pipe().subscribe(res => {
      console.log(res);
    })
  }

}
