import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-bind-apply',
  templateUrl: './call-bind-apply.component.html',
  styleUrls: ['./call-bind-apply.component.scss']
})
export class CallBindApplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doStuff() {

    var deleteBtn1 = document.createElement('button');
    deleteBtn1.innerHTML = 'Empty Cart';
    deleteBtn1.className = 'delete';
    document.body.appendChild(deleteBtn1);

    var tempThis = this;    // tempThis stores reference to this... 
    
    deleteBtn1.addEventListener('click', function () {
      console.log(this);                // this points to "deleteBtn1"
      // this.showMessage();            // ERROR: showMessage() doesnt exist on "button HTML element"
      // tempThis.showMessage();
    });


    var someButton = document.createElement('button');
    someButton.innerHTML = 'fill cart';
    someButton.className = 'fill-cart';
    document.body.appendChild(someButton);
    someButton.addEventListener('click', () => {
      this.showMessage();       // because, we used arrow function... 
                                // inside arrow function, this points to outerscope which has the object
    })
  }

  showMessage() { console.log('notice what this points to here'); }

  // bind() method creates a new function that, when called, has its this keyword set to the provided value
  bindExample() {}

  callExample() {}

  applyExample() {}

}
