import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
    const el = <HTMLInputElement>document.getElementById('inputEl');
    const valueToDisplay = document.getElementById('val');

    // attaching the event listener on keyup events
    el.addEventListener('keyup', (event) => {
      valueToDisplay.innerHTML = '23';
      // console.log(event);
    });


    const btn = document.getElementById('incrementVal');
      btn.addEventListener('click', () => {
        valueToDisplay.innerHTML = 'increment'
    });


  }

  

}
