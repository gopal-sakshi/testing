import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app69-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookList:any;
  constructor(private bookService:BookService) { 
    console.log('constructor called again ');
  }

  ngOnInit(): void {
    console.log('ng OnInit called again');
    this.bookList = this.bookService.getBookList();
  }

}
