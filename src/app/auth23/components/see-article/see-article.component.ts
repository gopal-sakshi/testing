import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Auth23Service } from '../../services/auth23.service';

@Component({
  selector: 'app69-see-article',
  templateUrl: './see-article.component.html',
  styleUrls: ['./see-article.component.scss']
})
export class SeeArticleComponent implements OnInit {

  showSecretArticle:boolean = false;
  constructor(private auth23Service:Auth23Service) { }

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

  fetchSecretArticle() {
    this.showSecretArticle = !this.showSecretArticle;
  
    this.auth23Service.seeArticles().subscribe(res => {
      console.log(res);
    });
  
  }
}
