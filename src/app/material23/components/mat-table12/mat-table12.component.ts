import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { ToDo23 } from '../../classes/toDo23';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-mat-table12',
  templateUrl: './mat-table12.component.html',
  styleUrls: ['./mat-table12.component.css']
})
export class MatTable12Component implements OnInit, AfterViewInit {

  displayedColumns = ['id'];
  dataSource: MatTableDataSource<ToDo23>

  // First grab the template sort directive with the @ViewChild
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  // Grab the MatPaginator directive using @ViewChild and then configing the data source with it.
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  
  constructor() { }

  ngOnInit(): void {
    const todos: ToDo23[] = [
      { id: '123', description: 'Apple', complete: false },
      { id: '124', description: 'Banana', complete: false },
      { id: '125', description: 'Chikoo', complete: false },
      { id: '126', description: 'Dates', complete: false }
    ]
    this.dataSource = new MatTableDataSource(todos)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
