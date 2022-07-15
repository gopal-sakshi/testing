import { Component, OnInit } from '@angular/core';
import { Master2 } from '../../classes/master2';

@Component({
  selector: 'app69-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends Master2 implements OnInit {
  
  displayName: string = 'Search Component';

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
