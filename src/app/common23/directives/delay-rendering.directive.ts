// this directive displays the DOM thingy after certain delay..

import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[delayRendering]'
})
export class DelayRenderingDirective {
    
    @Input() delayTime:any = 2000;

    constructor(private templateRef: TemplateRef<any>,
        private containerRef: ViewContainerRef) {}

    ngOnInit() {
        console.log(this.delayTime);
        setTimeout(()=> {
            this.containerRef.createEmbeddedView(this.templateRef)
        }, this.delayTime)
    }
}

// https://medium.com/technofunnel/creating-custom-structural-directive-in-angular-79a2862cc169

/* 
    TemplateRef 
    - represents the embedded template which is used to instantiate the embedded views. 
    - These embedded views are linked to the template which is to be rendered.

    ViewContainerRef 
    - is a container where one or more views can be attached. 
    - We can use createEmbeddedView() function to attach the embedded templates in the container.

    EXAMPLE
            <div *delayRendering="1000">
                <h1>This is the Template area</h1>
            </div>
    Here... 
        delayRendering structural directive is applied on <div> ---------> So, <div> block = viewContainerRef
        content inside the container  ----> <h1> tag ====> templateRef


*/