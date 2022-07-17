import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app69-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() default: any;
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;
  public attemptSearch: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.attemptSearch = false;
    this.searchForm = this.formBuilder.group({
      searchTerm: [this.default.searchTerm, Validators.required]
    });
  }

  searchClick() {
    this.attemptSearch = true;
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }

}
