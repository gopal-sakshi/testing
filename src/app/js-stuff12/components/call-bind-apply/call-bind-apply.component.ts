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
    document.getElementById('call-bind-apply23').appendChild(deleteBtn1);
    
    var tempThis = this;    // tempThis stores reference to this... because
    // I mean, inside function, this points to function & not the class
    deleteBtn1.addEventListener('click', function () {
      tempThis.showMessage('not_using_arrow');
    //   this.showMessage();           // ERROR: showMessage doesnt exist on button ('this' refers to button)
    });


    var someButton = document.createElement('button');
    someButton.innerHTML = 'fill cart';
    someButton.className = 'fill-cart';
    document.getElementById('call-bind-apply23').appendChild(someButton);
    someButton.addEventListener('click', () => {
      this.showMessage('using_arrow_this');       // because, we used arrow function... the reference to this isnt lost
      // I mean, inside arrow function, this still points class
    })
  }

  showMessage(arg:string) {
    console.log('notice23 ==>', arg);
  }

  // bind() method creates a new function that, when called, has its this keyword set to the provided value
  bindExample() {

  }

  callExample() {

  }

  applyExample() {

  }
}
