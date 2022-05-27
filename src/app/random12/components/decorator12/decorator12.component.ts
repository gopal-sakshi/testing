import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-decorator12',
  templateUrl: './decorator12.component.html',
  styleUrls: ['./decorator12.component.css']
})
export class Decorator12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire('Oops...', 'Something went wrong!');
  }



}


