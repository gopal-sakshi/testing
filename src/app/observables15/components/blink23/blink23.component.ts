import { Component, OnInit, ElementRef, OnDestroy, Renderer2, HostBinding } from '@angular/core';
import { merge, Observable, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'app69-blink23',
    templateUrl: './blink23.component.html',
    styleUrls: ['./blink23.component.scss']
})
export class Blink23Component implements OnInit {

    private element: Element;
    private blinker$: Observable<any>;
    private active: boolean = true;
    
    // APPROACH 02
    @HostBinding('style.visibility')
    private visibility: string;

    constructor(private renderer: Renderer2, elementRef: ElementRef) { 
        this.element = elementRef.nativeElement;
        const show$ = timer(0, 4000);
        const hide$ = timer(2000, 4000);
        this.blinker$ = merge(
            show$.pipe(map(() => 'visible')), 
            hide$.pipe(map(() => 'hidden'))
        )
    }
    
    // APPROACH 01
    // private set visibility(value: string) {
    //     this.renderer.setStyle(this.element, 'visibility', value)        
    // }




    ngOnInit(): void {
        this.blinker$.pipe(
            takeWhile(() => this.active)
        ).subscribe((newVisiblity: string) => {
            console.log("new visibility ===> ", newVisiblity)
            this.visibility = newVisiblity
        });
    }

    ngOnDestroy() {
        this.active = false;
    }

}
