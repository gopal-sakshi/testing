import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-syntax12',
    templateUrl: './angular-syntax12.component.html',
    styleUrls: ['./angular-syntax12.component.css']
})
export class AngularSyntax12Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.doStuff();
    }

    doStuff() {
        var input = document.querySelector('input');
        console.log(input.value);               // 'thoughtram'
        input.value = 'Angular Master Class';   // we change the value... and try to read the value using getAttribute
        console.log(input.value, input.getAttribute('value'));            // why it still prints     'thoughtram'
        /*          the property value is not reflected back to the attribute            */


        /*

            DOM element = attributes; when converted to JS object =  properties
            https://stackoverflow.com/questions/258469/what-is-the-difference-between-attribute-and-property
            changes to the properties will typically update the attributes.
            For example, changing the element.href property will update the href attribute on the element, 
            and that'll be reflected in a call to element.getAttribute('href')

            There are very few elements that actually reflect their property value back to its attribute.
            For example the src property of an img element.
                Changing its property will also change its attribute.
            In addition to that, a property can really get any value, whereas an attribute is always a string.
            For some reasons, since version 2.x, Angular always binds to properties rather than attributes
        */

    }
}
