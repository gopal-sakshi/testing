# OnPush

`@Input() changes`
(A) In the default change detection strategy, Angular will run the change detector any time @Input() data is changed or modified
(B) Using the OnPush strategy, the change detector is only triggered if a new reference is passed as @Input() value
(C) Primitive types like numbers, string, booleans, null, undefined are passed by value.
(D) Object and arrays are also passed by value but modifying object properties or array entries does not create a new reference and therefore does not trigger change detection on an OnPush component
(E) To trigger the change detector you need to pass a new object or array reference instead.

`change detection not triggered`
(A) setTimeout
(B) setInterval
(C) Promise.resolve().then(), (of course, the same for Promise.reject().then())
(D) this.http.get('...').subscribe() (in general, any RxJS observable subscription)
--------------------------------------------------------------------------------------------------------------