import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-dom-content-loaded',
  templateUrl: './dom-content-loaded.component.html',
  styleUrls: ['./dom-content-loaded.component.scss']
})
export class DomContentLoadedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // It seems, these events are triggered only once... when the webpage is loaded... 
      // not everytime a route is changed or something like that
    window.addEventListener('DOMContentLoaded', this.domContentLoadedListener);
    window.addEventListener('load', this.loadListener);

  }

  ngOnDestroy() {
    window.removeEventListener('DOMContentLoaded', this.domContentLoadedListener);
    window.removeEventListener('load', this.loadListener);
  }

  domContentLoadedListener = function() {
    console.log('dom loaded & parsed');
  }

  loadListener = function() {
    console.log('window loaded, hammayya');
  }

}
