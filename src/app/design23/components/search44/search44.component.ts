import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app69-search44',
  templateUrl: './search44.component.html',
  styleUrls: ['./search44.component.scss']
})
export class Search44Component implements OnInit {


  public items: any[];
  public searching = false;
  public searchForm: FormGroup;
  public attemptSearch: boolean;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.attemptSearch = false;
    this.route.queryParams.subscribe(params => {
      this.buildForm(params as any);
    });
  }

  private buildForm(init: any) {
    this.searchForm = this.formBuilder.group({
      searchTerm: [init.searchTerm, Validators.required]
    });
  }

  search() {
    this.attemptSearch = true;
    if (this.searchForm.valid) {
      this.searching = true;
      this.searchService.search(this.searchForm.value).subscribe(data => {
        this.items = data;
        this.searching = false;
      });
    }
  }

}
