import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[noCopyInput]'
})
export class NoCopy23Directive {
    
    constructor() { }

    @HostListener("copy",["$event"])
    noCopy(event44:KeyboardEvent) {
        console.log('copy will be blocked');
        event44.preventDefault();
    }

}