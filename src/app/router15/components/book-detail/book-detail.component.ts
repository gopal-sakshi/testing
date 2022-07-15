import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app69-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  bookId:number;
  bookDetails:any;

  constructor(private activatedRoute:ActivatedRoute,
    private bookService:BookService) {
    this.activatedRoute.params.subscribe(res => {      
      this.bookId = res.id;
    })
  }

  ngOnInit(): void {
    this.getBookFullDetails(this.bookId);
  }

  getBookFullDetails(bookId:number) {
    this.bookDetails = this.bookService.getBookFullDetails(bookId);    
  }

}
