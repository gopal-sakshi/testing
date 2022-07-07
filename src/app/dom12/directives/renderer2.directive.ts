import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[renderer2]'
})
export class Renderer2Directive implements OnInit {

    userLoggedIn:boolean = true;
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {    
        if(this.userLoggedIn) {
            this.renderer.addClass(this.el.nativeElement, 'wild23');
            this.renderer.setStyle(this.el.nativeElement, 'border-left', '2px dashed olive');
        } else {
            console.log('NADA');
        }        
    }

}