import { Component, OnInit } from '@angular/core';
import { FutDbService } from '../../services/fut-db.service';

@Component({
  selector: 'app69-fut-db',
  templateUrl: './fut-db.component.html',
  styleUrls: ['./fut-db.component.scss']
})
export class FutDbComponent implements OnInit {

  constructor(private futDbService:FutDbService) { }

  ngOnInit(): void {
  }

  getPlayers() {
    this.futDbService.getPlayers().pipe().subscribe(res => {
      console.log(res);
    })
  }
}
