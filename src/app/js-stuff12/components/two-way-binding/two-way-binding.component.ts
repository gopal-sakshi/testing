import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app69-two-way-binding',
    templateUrl: './two-way-binding.component.html',
    styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

        const el = <HTMLInputElement>document.getElementById('inputEl');
        const valueToDisplay = document.getElementById('val');

        // attaching the event listener on keyup events
        el.addEventListener('keyup', (event) => {
            console.log('entered digit ==> ', event.key)
            if(Number(event.key) < 0 || Number(event.key) > 9) {
                console.log("number enter cheyyi raa ")
                event.stopPropagation();
            }
            valueToDisplay.innerHTML = el.value;
        });


        const btn = document.getElementById('incrementVal');
        btn.addEventListener('click', () => {
            valueToDisplay.innerHTML = (Number(valueToDisplay.innerHTML) + 1).toString()
        });


    }



}
