import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-debounce13',
  templateUrl: './debounce13.component.html',
  styleUrls: ['./debounce13.component.scss']
})
export class Debounce13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
/*
  The debounce function 
  - delays the processing of the keyup event until the user has stopped typing for a predetermined amount of time.
  - prevents your UI code from needing to process every event 
  - drastically reduces the number of API calls sent to your server


  A debounce 
  - is a higher-order function, which is a function that returns another function 
  - This is done to form a closure around the func 
    and wait function parameters and the timeout variable so that their values are preserved
  

  https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086#:~:text=A%20debounce%20is%20a%20higher,that%20their%20values%20are%20preserved.

  https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/

*/