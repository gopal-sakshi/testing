import { Component, Input } from '@angular/core';

@Component({
  selector: 'app69-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() items: any[];

}
