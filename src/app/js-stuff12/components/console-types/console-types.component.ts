import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-console-types',
  templateUrl: './console-types.component.html',
  styleUrls: ['./console-types.component.scss']
})
export class ConsoleTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const name23 = 'fatfish';
    const age = 24;
    const job = 'Front end development engineer';
    const hobbies = 'read, write article';  

    console.log(name23, age, job, hobbies);
    console.log({name23, age, job, hobbies});

    console.warn('edo warning anta babai');

    console.log('%c braveheart', 'color: red;', 'cinema chudaali');
    console.log('hello %c gopal', 'color: blue; font-size:30px');
    console.error('motham stack trace print avvaali');

  }

}
