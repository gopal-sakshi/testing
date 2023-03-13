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
    const btn = document.getElementById('incrementVal');
    
    el.addEventListener('keyup', () => { valueToDisplay.innerHTML = (<HTMLInputElement>document.getElementById('inputEl')).value; });
    btn.addEventListener('click', () => { valueToDisplay.innerHTML = valueToDisplay.innerHTML + '1' });

  }

  

}
