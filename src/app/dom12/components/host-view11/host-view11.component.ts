import { Component, ComponentFactory, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HostViewExample1Component } from '../host-view-example1/host-view-example1.component';
import { HostViewExample2Component } from '../host-view-example2/host-view-example2.component';

@Component({
  selector: 'app-host-view11',
  templateUrl: './host-view11.component.html',
  styleUrls: ['./host-view11.component.scss']
})
export class HostView11Component implements OnInit {

  @ViewChild("container4", { read: ViewContainerRef }) container4:ViewContainerRef;
  @ViewChild("container5", { read: ViewContainerRef }) container5: ViewContainerRef;
  private hostViewExample1ComponentFactory: ComponentFactory<HostViewExample1Component>;
  
  private hostViewExample2ComponentFactory: ComponentFactory<HostViewExample2Component>;

  componentRef: any;
  someComponent23:any;

  componentRef2:any;

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
    // here we want to render "HostViewExample1Component"
      // so we create the component factory with name ====> "hostViewExample1ComponentFactory"
    this.hostViewExample1ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HostViewExample1Component);
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Rendering a host view is almost similar to rendering an embedded view... We directly insert it into a view container.

    // OPTION 1
        // a dynamic instance of the "HostViewExample1Component" is created by passing an Injector instance to the component factory
    // that dynamic instance is stored in localvariable called componentRef
    // Every component should be bound to an instance of Injector.
      // even "HostViewExample1Component" must be bound to an instance of Injector...
      // Here, we use the "injector of the parent component" for the dynamically created components.
      // Parent Component = HostView11Component.... Dynamically Created Component = HostViewExample1Component
    this.componentRef = this.hostViewExample1ComponentFactory.create(this.injector);
    this.container4.insert(this.componentRef.hostView);


    // OPTION 2    
    const dynamicComponent = this.container5.createComponent(this.hostViewExample1ComponentFactory);
    dynamicComponent.instance['data1']= 'hello doctor';
      // directly using createComponent() method on containerRef... earlier, we saw ----> insert(), createEmbeddedView() methods
    

    // OPTION 3
    this.someComponent23 = HostViewExample1Component;       
      // this someComponent23 will be directly used in 'html file'

  }

  createSecondComponent() {
    // created component factory for 'HostViewExample2Component'
    this.hostViewExample2ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(HostViewExample2Component);

    this.componentRef2 = this.hostViewExample2ComponentFactory.create(this.injector);

  }

}
