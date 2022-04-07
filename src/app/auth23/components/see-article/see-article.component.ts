import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app69-see-article',
  templateUrl: './see-article.component.html',
  styleUrls: ['./see-article.component.scss']
})
export class SeeArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.doStuff();    
  }

  async doStuff() {
    const result = await this.addNum(2,3).then().catch();
    console.log('response = ',result);
  }
  
  addNum(a,b) {
    console.log('did stuff for a while');
    return of('gopal').toPromise();
  }

}
