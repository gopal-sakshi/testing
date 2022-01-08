import { Component, ComponentFactory, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HostViewExampleComponent } from '../host-view-example/host-view-example.component';

@Component({
  selector: 'app-host-view11',
  templateUrl: './host-view11.component.html',
  styleUrls: ['./host-view11.component.scss']
})
export class HostView11Component implements OnInit {

  @ViewChild("container4", { read: ViewContainerRef }) container4:ViewContainerRef;
  @ViewChild("container5", { read: ViewContainerRef }) container5: ViewContainerRef;
  private hostViewExampleComponentFactory: ComponentFactory<HostViewExampleComponent>;
  componentRef: any;
  someComponent23:any;

  /* 
    PROPERLY UNDERSTAND the terminology
    a) component-factory-resolver
    b) component-factory
    c) component
    d) 
  
  */
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { 

    // We need to create a ComponentFactory of the component you want to render using ComponentFactoryResolver.
    // here we want to render "HostViewExampleComponent"
      // so we create the component factory with name ====> "hostViewExampleComponentFactory"
    this.hostViewExampleComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HostViewExampleComponent);
    this.someComponent23 = HostViewExampleComponent;
    
    // a dynamic instance of the "HostViewExampleComponent" is created by passing an Injector instance to the component factory
    // that dynamic instance is stored in localvariable called componentRef
    // Every component should be bound to an instance of Injector.
      // even "HostViewExampleComponent" must be bound to an instance of Injector...
      // Here, we use the "injector of the parent component" for the dynamically created components.
      // Parent Component = HostView11Component.... Dynamically Created Component = HostViewExampleComponent
    this.componentRef = this.hostViewExampleComponentFactory.create(this.injector);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Rendering a host view is almost similar to rendering an embedded view... We directly insert it into a view container.
    this.container4.insert(this.componentRef.hostView);   // OPTION 1

    this.container5.createComponent(this.hostViewExampleComponentFactory)   // OPTION 2

  }

}
