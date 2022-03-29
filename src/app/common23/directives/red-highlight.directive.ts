import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[redHighlight]'
})
export class RedHighlightDirective {
    constructor(private eleRef: ElementRef) {
        eleRef.nativeElement.style.background = 'firebrick';
    }

}