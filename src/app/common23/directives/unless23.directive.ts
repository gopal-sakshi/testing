import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless23]',
})

export class UnlessDirective23 {

    // When wrapping a property in brackets [] you're trying to bind to it. 
    // So you have to declare it as an @Input.
    // Otherwise ---> Can't bind to 'delayRendering', since it isn't a known property of 'div
    // Otherwise ---> Can't bind to '[appUnless23]', since it isn't a known property of 'div
    
    // @Input() appUnless23:any;    // OR
    // @Input() set appUnless23() { }

    private hasView = false;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {}

    @Input() set appUnless23(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}