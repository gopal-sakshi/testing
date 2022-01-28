import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation12',
  templateUrl: './view-encapsulation12.component.html',
  styleUrls: ['./view-encapsulation12.component.scss'],
  //encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.ShadowDom
  /*
    ViewEncapsulation.None
      style gets moved to the DOM's head section and is not scoped to the component. 
      There is no Shadow DOM for the component and the component style can affect all nodes in the DOM.

    ViewEncapsulation.Emulated
      this applies the styles declared in the ComponentParent ONLY and ONLY to the ComponentParent content, 
        but EXCLUDING the child components like ComponentChild. 
      In other words, only on "pure" HTML elements, but not angular web (component) elements.
    ----------> This (ViewEncapsulation.Emulated) is default in Angular... 


    ViewEncapsulation.ShadowDOM
      creates a native shadow DOM root around the component (in our case --> ViewEncapsulation12Component)
      This will protect any (CSS/SASS) style we declare inside the component to leak OUTSIDE the component. 
      However, it will apply to child components like "ViewEncapChild1Component"
  */
})
export class ViewEncapsulation12Component implements OnInit {

  title:string = 'parent - view encap'
  constructor() { }

  ngOnInit(): void {
  }

}
