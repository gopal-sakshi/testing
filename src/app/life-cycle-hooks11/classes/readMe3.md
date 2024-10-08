## SUMMARY

<div>Hello {{name}}</div>
Angular updates the DOM whenever the value of the name changes. And it does it instantly.
How does angular know when the value of the name changes? 
It does so by <running a change detection cycle> on every event

During change detection cycle
- Angular checks every <bound property in the template> with that of the <component class>
- if it detects any changes, it updates the DOM


ngOnChanges
ngOnInit
ngDoCheck       use with OnPush

ngOnChanges             --- deals with @Input()
ngAfterContentInit      --- deals with projected content
ngAfterViewInit         --- deals with @ViewChild()

<ng-content></ng-content>   whenever the projected content 
ngAfterContentInit                  fired only once @ 1st CD cycle
ngAfterContentChecked               fired after every CD cycle
<!-- ------------------------------------------------------------------------- -->