import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app69-content-init',
    templateUrl: './content-init.component.html',
    styleUrls: ['./content-init.component.scss']
})
export class ContentInitComponent {


    @ViewChild('wrapper') wrapper: ElementRef;
    @ContentChild('myContent') content: ElementRef;

    ngOnInit() {
        console.log("wrapper & content will be undefined here ", this.wrapper, this.content)
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit - wrapper & content ===> ', this.wrapper, this.content);        
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit - wrapper & content ===> ', this.wrapper, this.content);        
    }

}
