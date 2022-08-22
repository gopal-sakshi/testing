import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { AgGrid26 } from '../../classes/ag-grid26';
import { StatsTablePage } from '../../classes/stats-table-page';
import { AgGrid26Service } from '../../services/ag-grid26.service';

@Component({
  selector: 'app69-ag-grid26',
  templateUrl: './ag-grid26.component.html',
  styleUrls: ['./ag-grid26.component.scss'],
  providers: [
    {
      provide: StatsTablePage,
      useExisting: forwardRef(() => AgGrid26Service)
    }
  ]
})
export class AgGrid26Component extends AgGrid26 implements OnInit {
  
  pagination: boolean = true;

  constructor(protected injector: Injector) { 
    super(injector)
  }

  ngOnInit(): void {
    this.initClass();
  }

}
