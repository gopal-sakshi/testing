import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HackerNewsService } from '../../services/infinite-scroll.service';

@Component({
  selector: 'app69-infinite-scroller',
  templateUrl: './infinite-scroller.component.html',
  styleUrls: ['./infinite-scroller.component.scss']
})
export class InfiniteScrollerComponent implements OnInit {

currentPage: number = 1;

  news: Array<any> = [];

  scrollCallback;

  constructor(private hackerNewsSerivce: HackerNewsService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  ngOnInit(): void {}

  getStories() {
    return this.hackerNewsSerivce.getLatestStories(this.currentPage).pipe(tap(this.processData))
  }

  private processData = (news) => {
    this.currentPage++;
    this.news = this.news.concat(news.json());
  }
}
