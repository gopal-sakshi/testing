import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-css-flex12',
  templateUrl: './css-flex12.component.html',
  styleUrls: ['./css-flex12.component.scss']
})
export class CssFlex12Component implements OnInit {

  cities:string[] = [ "paris", "madrid",  "munich",  "london", "lisbon",  "rome",  "delhi",  "beijing",  "canberra",
                      "newyork", "ottowa", "brasilla",  "buenos aires", "lapaz",  "warsaw",  "nairobi",  "moscow",  "stockholm" ];
  fruits:string[] = [ "apple", "banana", "chickoo", "dates"];  
  constructor() { }

  ngOnInit(): void {

    // FlexBox ====> design flexible responsive layout structure without using float or positioning.
    
    // Properties applied on parent
        // flex-direction             row, column, row-reverse, column-reverse
        // flex-wrap                  wrap, nowrap, wrap-reverse
        // flex-flow                  shorthand for flex-direction & flex-wrap ===> row wrap (or) column wrap-reverse
        // justify-content            center, flex-start, flex-end, space-around, space-between
        // align-items                center, flex-start, flex-end, space-around, stretch, baseline
        // align-content              center, flex-start, flex-end, space-around, stretch, baseline

    // Properties applied on child
        // order                      style="order: 3"                    will appear 3rd in the list
        // flex-grow                  style="flex-grow: 8"                make this flex-item 8 times bigger
        // flex-shrink
        // flex-basis                 style="flex-basis: 200px"           specifies initial length of flex-item
        // flex                       shorthand property for the flex-grow, flex-shrink, flex-basis
                                      // style="flex: 0 0 200px"      not growable, not shrinkable with 200px initial length
        // align-self                 align-self overrides default alignment set by the container's align-items


    // Note
        // If you are using flex-grow, flex-shrink, flex-basis on child element
        // no need to use justify-content on parent div... think about it
  }

}
