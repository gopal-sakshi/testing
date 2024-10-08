import { Directive, ElementRef, HostBinding, HostListener, Input } from'@angular/core';
@Directive({
    selector: '[onEnterFocusNextElem23]'
})
export class OnReturnDirective {
    private el: ElementRef;
    @Input() onReturn: string;
    constructor(private _el: ElementRef) {
        this.el = this._el;
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.fontSize') fontSize: string;
    // host element background & fontSize ni directive property tho bind chesaam...
    // directive property maarite, host element properties kooda maarataayi

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        // console.log("on key down ===> ", e.key);
        if ((e.which == 13 || e.keyCode == 13)) {
            console.log("enter press chesarro roi ===> ", e.key);

            // oka field lo enter kottagaane, host element background & size maraali...
            this.backgroundColor = '#f7f4a1';
            this.fontSize = 'xx-large';

            e.preventDefault();
            if (e.srcElement.nextElementSibling) {
                e.srcElement.nextElementSibling.focus();
            }
            else {
                console.log('close keyboard');
            }
            return;
        }

    }

    /*
        @HostListener('window:resize')     show/hide sideNav content based on window.innerWidth
        


    */
}