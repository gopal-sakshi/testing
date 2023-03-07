import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encap-child1',
  templateUrl: './view-encap-child1.component.html',
  styleUrls: ['./view-encap-child1.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ViewEncapChild1Component implements OnInit {

  title:string = 'child - view encapsulation'
  constructor() { }

  ngOnInit(): void {
  }

}


/*
  
  If you want styles that are added to Parent applied to Child 
  - you need to set ViewEncapsulation.None in the Child component so it doesn't prevent styles to bleed in.

  Emulated & Native are just two different ways to prevent styles to bleed in to and out from components.
  None is the only one that allows styles to cross component boundaries.

  it seems Native is obsolete now... or deprecated



*/