import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
    selector: 'app-home-styling',
    templateUrl: './home-styling.component.html',
    styleUrls: ['./home-styling.component.scss']
})
export class HomeStylingComponent implements OnInit {

    textContent23:Observable<any>;
    showAnimate12: boolean = false;
    showStyling13: boolean = false;
    showStylingSection: boolean = false;
    showMatThemes: boolean = false;
    showCSSFlex: boolean = false;
    showCSSGrid: boolean = false;

    resizeObservable23$: Observable<any>
    resizeSubscription33: Subscription


    constructor() { }

    ngOnInit() {
        this.textContent23 = of('test', 'chatgpt', 'style', 'response', 'word', 'by', 'word').pipe(delay(2000));
        this.resizeObservable23$ = fromEvent(window, 'resize');
        this.resizeSubscription33 = this.resizeObservable23$.subscribe(res => {
            console.log(res);
            alert("window resized arey");
        });
    }

    ngOnDestroy() {
        console.log("now unsubscribed from resize Observable... hello doctor")
        this.resizeSubscription33.unsubscribe();
    }
}
