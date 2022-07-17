import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app69-search45',
  templateUrl: './search45.component.html',
  styleUrls: ['./search45.component.scss']
})
export class Search45Component implements OnInit {

  public init: any;
  public items: any[];
  public searching = false;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.init = params as any;
    });
  }

  search(criteria: any) {
    this.searching = true;
    this.searchService.search(criteria).subscribe(data => {
      this.items = data;
      this.searching = false;
    });
  }
}
