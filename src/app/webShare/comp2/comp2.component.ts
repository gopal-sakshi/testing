import { Component, OnInit } from '@angular/core';
import { shareClass } from 'src/app/classes/shareClass';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component extends shareClass implements OnInit {

  btn: any;
  shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  
  doStuff() {
    this.btn = document.querySelector('button');
    const resultPara = document.querySelector('.result');
    
    this.btn.addEventListener('click', async () => {
      try {
        await navigator.share(this.shareData)
        resultPara.textContent = 'MDN shared successfully'
      } catch(err) {
        resultPara.textContent = 'Error: ' + err
      }
    });

    if (1) {
      navigator.share({
        // files: filesArray,
        title: 'Pictures',
        text: 'Our Pictures.',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      console.log(`Your system doesn't support sharing files.`);
    }
  }

}
