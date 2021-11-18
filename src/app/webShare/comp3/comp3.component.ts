import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shareNow = async () => {
    console.log("insdie shareNow method....");
    if (1) {                   // 'canShare' in navigator
      console.log("insdie if condition....");
      let img = 'assets/images/elephant.jpeg';
      const share = async function () {
        try {
          const response = await fetch(img);
          const blob = await response.blob();
          const file = new File([blob], 'rick.jpg', { type: blob.type });
          await navigator.share({
            url: img,
            title: 'Image',
            text: 'Image',
          });
          console.log("shared successfully....");
        } catch (err) {
          console.log(err.name, err.message);
        }
      };
      share();
    } else 
      console.log("problemo");
  };


  // shareNow() {
  //   alert("blahblah");
  // }

}
