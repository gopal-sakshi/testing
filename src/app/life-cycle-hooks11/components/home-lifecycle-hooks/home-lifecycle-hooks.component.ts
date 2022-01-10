import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-lifecycle-hooks',
  templateUrl: './home-lifecycle-hooks.component.html',
  styleUrls: ['./home-lifecycle-hooks.component.scss']
})
export class HomeLifecycleHooksComponent implements OnInit {

  input1:any;
  input2:any;
  input3:any;

  constructor(private _ngZone:NgZone) { }

  ngOnInit(): void {
    
    this.input1 = {
      name: "gopal",
      age: 33,
    }
    
    this.input2 = {
      city: "hyderabad",
      country: "India"
    }

    this.input3 = {
      football: {
        clubName: 'Real Madrid',
        captain: 'Benzema',
        stadium: 'Santiago Bernabeu'
      }
    }
  }

  changeInput1() {
    this.input1 = {
      name: "sakshi",
      age: 34
    }
  }

  changeInput2() {
    
    this._ngZone.runOutsideAngular(() => {
      this.input2.city = "vijayawada";
    });
  }

  changeInput3() {
    this.input3.football.captain = 'Luka'
  }
}
