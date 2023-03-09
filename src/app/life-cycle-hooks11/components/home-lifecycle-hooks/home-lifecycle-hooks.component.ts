import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { ChangeDetection11 } from '../../classes/change-detection';
import { ChangeDetection12Component } from '../change-detection12/change-detection12.component';

@Component({
  selector: 'app-home-lifecycle-hooks',
  templateUrl: './home-lifecycle-hooks.component.html',
  styleUrls: ['./home-lifecycle-hooks.component.scss']
})
export class HomeLifecycleHooksComponent extends ChangeDetection11 implements OnInit {
// export class HomeLifecycleHooksComponent extends ChangeDetection11 {

  input1:any;
  input2:any;
  input3:any;

  playerName:string[] = ['Benzema', 'Alaba', 'Courtois', 'Militao'];
  club:string[] = ['RealMadrid', 'Los Blancos', 'Los Galacticos', 'The Whites'];

  ngDoCheck:boolean = false
  showCd11:boolean = false;
  showCd12:boolean = false;
  showCd13:boolean = false;
  change23:boolean = false;
  showZone:boolean = false;
  zone11OutsideAngular:boolean = false;
  showContentInit:boolean = false;
  /*

  Constructor
  - The constructor should only be used to initialize class members but shouldn't do actual "work".
  - So you should use constructor() to setup Dependency Injection and not much else

  ngOnInit
  - we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor.
  - ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.

  https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit

  */
  constructor(private _ngZone:NgZone, protected injector: Injector) {
    super(injector);
  }

  // If you import OnInit... do export class AppComponent implements OnInit ----> then you have to add the ngOnInit() method
  // Otherwise, you get compilation error...
  ngOnInit(): void {

    console.log('inside ngOnIniti of life cycle hooks home');
    this.input1 = { name: "gopal", age: 33 }

    this.input2 = { city: "hyderabad", country: "India" }

    this.input3 = {
      football: { clubName: 'Real Madrid', captain: 'Benzema', stadium: 'Santiago Bernabeu' }
    }
  }

  changeInput1() {
    this.input1 = { name: "sakshi", age: 34 }
  }

  changeInput2() {

    this._ngZone.runOutsideAngular(() => {
      
      // nested property change is not detected
      // this.input2.city = "vijayawada";

      // run outside angular change got detected ???      
        // but I think, it should be async operation for change not to be detected
      setTimeout(() => {
        this.input2 = { city: "madrid", country: "spain" } }, 1000)      
      });
  }

  changeInput3() {
    this.input3.football.captain = 'Luka'
  }

  openBottomSheet1() {
    this.bottomSheet.open(ChangeDetection12Component, 
      { data: { playerName: this.playerName[0], club: this.club[0]}, }
    );
  }

  modifyBottomSheetInputs() {
    // this.playerName = 'Modric';
    // this.club = 'RM';
  }

}
