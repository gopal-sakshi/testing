import { Component, OnInit } from '@angular/core';
import "zone.js"

@Component({
  selector: 'app-zone12',
  templateUrl: './zone12.component.html',
  styleUrls: ['./zone12.component.css']
})
export class Zone12Component implements OnInit {

  currentZone:Zone = Zone.current;
  childA_zone:Zone;
  childB_zone:Zone;

  constructor() { }

  ngOnInit(): void {
    console.log(Zone.root);
    console.log(Zone.root.name);
    console.log(Zone.current);
  }

  createChildZones() {
    
    this.childA_zone = this.currentZone.fork({
      name: 'childA',
      onInvoke(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, applyThis: any, applyArgs?: any[], source?: string):any {
        console.log("intercepted in childA zone - before");
        parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs);
        console.log("intercepted in childA zone - after");
      }
    });

    this.childB_zone = this.childA_zone.fork({
      name: 'childB',
      onInvoke(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, delegate: Function, applyThis: any, applyArgs?: any[], source?: string): any {
        console.log("intercepted in childB zone - before");
        parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs);
        console.log("intercepted in childB zone - after");
      }
    });    
  }

  runZone() {
    this.childB_zone.run(this.helloFunction)
  }

  helloFunction() {
    console.log("this is hello function")
  }
}

/*
  Zones are just the execution context where all the ZoneTask’s are executed using API

  What can we do with ZoneAPIs
  a) Forking = We can create a new Zone using fork API passing the specification for the new zone we want to create.
  b) Interception = ability to intercept multiple operations done to execute the tasks in the zone.


  Applications
  a) Profiling asynchronous calls
  b) decorators
  c) DOM Rendering
  d) 


*/


/*
  currentZone — It refers to the Zone which is currently intercepting the task.
  targetZone — It refers to the Zone in which the Task was invoked.
  task — It refers to the task that’s supposed to be executed.
  parentZoneDelegate — It’s a special object ZoneDelegate 
                        which maintains the reference to the parent Zone which defines the same hook for interception.
*/
