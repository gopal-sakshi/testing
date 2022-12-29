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

  displayedColumns = ['id', 'description', 'complete'];
  dataSource: MatTableDataSource<ToDo23>

  // First grab the template sort directive with the @ViewChild
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  // Grab the MatPaginator directive using @ViewChild and then configing the data source with it.
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;


  
  constructor() { }

  ngOnInit(): void {
    const todos: ToDo23[] = [
      { id: '13', description: 'Apple', info: 'an apple a day keeps doctor away',  complete: false },
      { id: '14', description: 'Banana', info: 'aratipandu in telugu', complete: false },
      { id: '25', description: 'Chikoo', info: 'priya likes sapota',  complete: false },
      { id: '16', description: 'Dates', info: 'grown in middle east', complete: false },
      { id: '19', description: 'Eateries', info: 'generic term', complete: false },
      { id: '11', description: 'Fruits', info: 'not veggies', complete: false },
      { id: '26', description: 'Grapes', info: 'whiskey is made from grapes ??', complete: false },
    ]
    this.dataSource = new MatTableDataSource(todos)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
