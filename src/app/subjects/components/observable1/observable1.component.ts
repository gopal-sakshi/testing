import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  obs1:Observable<any>
  
  constructor() { }

  ngOnInit(): void {
    var count = 0;
    var button = document.querySelector('button');

    // Option A
    button.addEventListener('click', () => console.log(`Clicked ${++count} times`));


    // Option B
    // this.obs1.fromEvent(button, 'click')
    //   .scan(count => count + 1, 0)
    //   .subscribe(count => console.log(`Clicked ${count} times`));
  }

}
