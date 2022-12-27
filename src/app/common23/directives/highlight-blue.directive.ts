import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[blueHighlight]'
})
export class BlueHighlightDirective {

    constructor(private eleRef: ElementRef) {}
    
    @HostListener('mouseover') onMouseEnter() { 
        this.eleRef.nativeElement.style.background = 'blue';
    }

    // mouseleave & mouseout are similar... small differnce is ===> 
        // in that mouseleave does not bubble and mouseout does. 
        // mouseleave is fired when the pointer has exited the element & all of its descendants
        // whereas mouseout is fired when the 
            // pointer leaves the element or 
            // leaves one of the element's descendants 
            // even if the pointer is still within the element


    @HostListener('mouseleave') onMouseLeave23() {
        this.eleRef.nativeElement.style.background = 'white';
    }

}