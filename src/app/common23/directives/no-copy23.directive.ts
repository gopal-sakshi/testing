import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[noCopyInput]'
})
export class NoCopy23Directive {
    
    constructor() { }

    @HostListener("copy",["$event"])
    noCopy(event44:KeyboardEvent) {
        console.log('copy will be blocked23 - but you can cut');
        event44.preventDefault();
    }

    // @HostListener("cut",["$event"])
    // noCut23(event44:KeyboardEvent) {
    //     console.log('cut will be blocked23');
    //     event44.preventDefault();
    // }

}