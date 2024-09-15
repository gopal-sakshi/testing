import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Child12Component } from '../child12/child12.component';

@Component({
    selector: 'app69-parent-r13',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentR13Component {

    @ViewChild("viewContainerRef", { read: ViewContainerRef }) VCR: ViewContainerRef;
    child_unique_key: number = 0;
    componentsReferences = Array<ComponentRef<Child12Component>>()

    constructor(private CFR: ComponentFactoryResolver) { }

    createComponent() {

        let componentFactory = this.CFR.resolveComponentFactory(Child12Component);
        let childComponentRef = this.VCR.createComponent(componentFactory);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = ++this.child_unique_key;
        childComponent.parentRef = this;

        // add reference for newly created component
        this.componentsReferences.push(childComponentRef);
    }

    remove(key: number) {
        console.log("remove child comp ===> ", key);
        if (this.VCR.length < 1) return;

        /*********** USE FILTER (OR) FIND **********************************************/
        // let componentRef = this.componentsReferences.filter( (x) => {
        //     console.log("instance keys ===> ", x.instance.unique_key, key)
        //     return x.instance.unique_key == key;
        // })[0];
        let componentRef = this.componentsReferences.find( (x) => {
            console.log("instance keys ===> ", x.instance.unique_key, key)
            return x.instance.unique_key == key;
        });
        /*************** using find instead of filter; although filter works *************/
        console.log("found componentRef ===> ", componentRef);
        console.log("VCR =====> ", this.VCR);
        // let vcrIndex: number = this.VCR.indexOf(componentRef as any);
        let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);
        console.log("vcrIndex =======> ", vcrIndex);

        if(vcrIndex > -1) {
            // removing component from container
            this.VCR.remove(vcrIndex);
            // removing component from the list
            this.componentsReferences = this.componentsReferences.filter(
                x => x.instance.unique_key !== key
            );
        } else {
            console.log("vcrIndex -1 kante takku abbaayi")
        }

    }
}
