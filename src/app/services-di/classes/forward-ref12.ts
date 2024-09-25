import { forwardRef, Inject, Injectable } from "@angular/core";

// NOT USED....... some dummy file, trying to learn forwardRef
// https://indepth.dev/posts/1133/what-is-forwardref-in-angular-and-why-we-need-it

export class Door23 {
    lockVar: Lock23;
    // Door attempts to inject Lock, despite it not being defined yet. forwardRef makes this possible.
    // constructor(@Inject(forwardRef(() => Lock)) lock: Lock) {  this.lock = lock; }
    constructor(@Inject(Lock23) lock: Lock23) { this.lockVar = lock; }
}

// Only at this point Lock is defined.
@Injectable()
export class Lock23 {
    isLocked:boolean = false;    
    lock() { 
        if (this.isLocked) return
        else { console.log('locking'); this.isLocked = true;} 
    };
    getStatus() { return this.isLocked }
}