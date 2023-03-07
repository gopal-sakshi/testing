import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation12',
  templateUrl: './view-encapsulation12.component.html',
  styleUrls: ['./view-encapsulation12.component.scss'],
  //encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated
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




    /*
      If you want styles that are added to Parent applied to Child 
      - you need to set ViewEncapsulation.None in the Child component 
        so it doesn't prevent styles to bleed in.
        (or) it allows styles to bleed in
      
      Emulated and Native are just two different ways 
      - to prevent styles to bleed in to and out from components. 
      - Emulated = add's unique attributes to parent's HTML tags... so, styles dont go into child's HTML tags
      - Emulated = default in Angular 2

      None is the only one that allows styles to cross component boundaries.


    */
})
export class ViewEncapsulation12Component implements OnInit {

  title:string = 'parent - view encap'
  constructor() { }

  ngOnInit(): void {
  }

}
