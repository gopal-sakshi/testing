import { Component, Injector } from '@angular/core';
import { Inject26BaseClass } from '../../classes/inject26-base.class';

@Component({
  selector: 'app69-inject26',
  templateUrl: './inject26.component.html',
  styleUrls: ['./inject26.component.scss']
})
export class Inject26Component extends Inject26BaseClass {

  // here injector ---> must be protected... if it is private --------> some errors 
    // (both 'base class (Inject26BaseClass)' & 'inherited class (Inject26Component)' 
    // -------> share same property injector... but its private)
    
  constructor(protected injector:Injector) { 
    super(injector);
  }

  whyInjectorGet() {
    console.log(this.get26AStuff());
    console.log(this.get26BStuff());
  }

}
