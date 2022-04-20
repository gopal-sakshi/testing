import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[processDecimal]'
})
export class ProcessDecimalDirective {

    @Input() firstParam:string;
    @Input() secondParam: string;    

    constructor(private elementRef:ElementRef) {}

    // understand why we used keypress event
        // KeyPress event is invoked only for character (printable) keys
        // KeyDown event is raised for all including nonprintable such as Control, Shift, Alt, BackSpace
    @HostListener('keypress', ['$event'])
    processInput1(event:KeyboardEvent) {
        console.log(event);
        var decimalRegex = /(?<=\.)\d.*/g;
        if((event.key >= '0' && event.key <= '9') || event.key === '.') {
            console.log(this.elementRef.nativeElement.value);
            console.log(this.elementRef.nativeElement.value.match(decimalRegex))        // allow only 3 decimals
            this.elementRef.nativeElement.value.match(decimalRegex) ?
            this.elementRef.nativeElement.value.match(decimalRegex)[0].length < 3 ? '' : event.preventDefault() : '';
        } else {
            event.preventDefault();
        }        
    }
    // @HostListener('keypress', ['$event'])
    processInput2(event:KeyboardEvent) {
        var onlyDigitOrDotRegex = /[^0-9.]/g;
        // event.key = event.key.replace(onlyDigitOrDotRegex, '');
            // this doesnt work, because key is read-only property
    }

    ngAfterViewInit() {
        console.log(this.firstParam);
        console.log(this.secondParam);
        console.log(this.elementRef.nativeElement.value);
    }
}