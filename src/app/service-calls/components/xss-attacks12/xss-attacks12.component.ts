import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app69-xss-attacks12',
    templateUrl: './xss-attacks12.component.html',
    styleUrls: ['./xss-attacks12.component.scss']
})
export class XssAttacks12Component implements OnInit {

    
    html23_copy:string = `<img src=assets/images/company-logo.png onerror="alert('Doh!')"/>`;
    html23:string = `<img src=1 onerror="alert('Doh!')"/>`;
    safeHTML23:SafeHtml
    linky23 = `//localhost:9999/assets/itemDetails/banana`;
    safeLinky23!: SafeResourceUrl;
    imageId: string = '23';
    @ViewChild('whydothis23') public el!: ElementRef<HTMLElement>;


    constructor(private sanitizer: DomSanitizer, private renderer: Renderer2) { }

    @ViewChild('scriptPlacedHere2') divElement: ElementRef;

    ngOnInit(): void {
        this.safeHTML23 = this.sanitizer.bypassSecurityTrustHtml(this.html23);
        this.safeLinky23 = this.sanitizer.bypassSecurityTrustResourceUrl(this.linky23 + `${this.imageId}` + '.jpg' );
    }

    ngAfterViewInit(): void {
        let err23 = `<img src=1 onerror="alert('sanitizer pani cheyyadu elementRef use cheste')"/>`
        this.el.nativeElement.innerHTML = err23;
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', err23);
    }

    get comments(): Observable<any> {
        return of([
            '<a href="javascript:alert(\'Crash Landing on You stinks!\')">Click to win a free prize!</a>',
            `<img src=1 onerror="alert('Doh!')"/>`,
            `<strong>It's a wonderful drama! The best!</strong>`
        ])
    }

}
