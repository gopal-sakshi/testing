import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { ChangeDetection11 } from '../../classes/change-detection';
import { ChangeDetection12Component } from '../change-detection12/change-detection12.component';

@Component({
  selector: 'app-home-lifecycle-hooks',
  templateUrl: './home-lifecycle-hooks.component.html',
  styleUrls: ['./home-lifecycle-hooks.component.scss']
})
export class HomeLifecycleHooksComponent extends ChangeDetection11 implements OnInit {

  input1:any;
  input2:any;
  input3:any;

  playerName:string[] = ['Benzema', 'Alaba', 'Courtois', 'Militao'];
  club:string[] = ['RealMadrid', 'Los Blancos', 'Los Galacticos', 'The Whites'];

  ngDoCheck:boolean = false
  showCd11:boolean = false;
  showCd12:boolean = false;
  showCd13:boolean = false;
  showZone:boolean = false;
  showOnPush:boolean = false;
  zone11OutsideAngular:boolean = false;
  showContentInit:boolean = false;

  constructor(private _ngZone:NgZone, protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.input1 = { name: "gopal", age: 33 }
    this.input2 = { city: "hyderabad", country: "India" }
    this.input3 = {
      football: { clubName: 'Real Madrid', captain: 'Benzema', stadium: 'Santiago Bernabeu' }
    }
  }

  changeInput1() { this.input1 = { name: "sakshi", age: 34 } }

  changeInput2() {
    this.input2 = { city: "madrid", country: "spain" };
  }

  changeInput2_async() {
    setTimeout(() => { this.input2 = { city: "madrid", country: "spain" } }, 3000);
  }

  changeInput2_outsideAngular() {
    // For ChangeDetection not to work... change must be made asynchronously && outside Angular zone

    // Approach I ====> change made asynchronously
    // setTimeout(() => { this.input2 = { city: "madrid", country: "spain" } }, 3000);


    // Approach II ====> change made outside angular... 
    // runOutsideAngular doesn't mean Angular won't see the change
        // it only means that the code run this way doesn't cause change detection
        // but because the click event already does, it's meaningless
    // https://stackoverflow.com/questions/40300635/angular-2-runoutsideangular-still-change-the-ui
    // this._ngZone.runOutsideAngular(() => { 
    //   this.input2 = { city: "madrid", country: "spain" };
    // });

    // Approach III =====> change made outside angular & asynchronously
    // this._ngZone.runOutsideAngular(() => { 
    //   setTimeout(() => { this.input2 = { city: "madrid", country: "spain" }; console.log(this.input2) }, 1000) 
    // });

    // Approach IV ======> change made asynchronously & outside Angular
    setTimeout(() => {
      this._ngZone.runOutsideAngular(() => { 
        this.input2 = { city: "madrid", country: "spain" }; 
        console.log(this.input2) 
      });
    }, 2000);

  }

  changeInput3() {        // In OnPush strategy, change wont be reflected... use changeInput3_whole() instead
    this.input3.football.captain = 'Luka';
  }

  changeInput3_whole() {    
    this.input3 = { football: { clubName: 'Real Madrid', captain: 'Luka', stadium: 'Santiago Bernabeu' } }
  }

  openBottomSheet1() {
    this.bottomSheet.open(ChangeDetection12Component, 
      { data: { playerName: this.playerName[0], club: this.club[0]}, }
    );
  }


}
