import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sweet-alert12',
  templateUrl: './sweet-alert12.component.html',
  styleUrls: ['./sweet-alert12.component.css']
})
export class SweetAlert12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      title: 'title = directly firing swal',
      html: '<div style="color:red">html styling</div>',
      titleText: 'Title Text',
      //icon: 'success',
      icon: 'warning',
      //width: '1000px',
      //position: 'bottom-right',
      //position: 'center',
      //heightAuto: true,
      // timer: 10000,
      // timerProgressBar: true,
      showCancelButton: true,
      cancelButtonText: 'Cancel hellooooooo',

    });
    // setTimeout(() => {
    //   Swal.fire({
    //     title: 'title',
    //     //icon: 'error'
    //     icon: 'info'
    //   })
    // }, 5000);
    
  }

}
