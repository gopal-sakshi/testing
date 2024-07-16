`mergeMap`
- mergeMap is used when API requests are dependent ===> when we need data from 1st API request to make requests to 2nd API.
- you <don't have to wait> for every HTTP request to complete. 
- you can react as they complete. 
- plus, you can handle errors easier (so if one request fails you can still continue with the other requests)
- But you have to handle your emitted values in the .subscribe() a little differently
- mergeMap operator 
    takes an input observable, 
    applies a transformation function to each emitted value, 
    merges the resulting observables into a single output observable.
- By using MergeMap(), we can avoid nested subscriptions

`forkJoin`
- forkJoin is used when API requests are independent. 
- 1st request doesnt depend on 2nd request to complete and can execute in parallel.
- data from all http requests --> loaded inside subscribe() method
- you have to <wait for every HTTP request to finish> before forkJoin emits the value


`concatMap`
- execute the requests in order. 
- Meaning it would wait for the first request to complete, and then send the next
- so as not to increase server capacity


`switchMap`
- cares only about the latest value emitted by the observable
- cancelling any previous HTTP requests that were still in progress.
- <switchMap> cancels previous HTTP requests that are still in progress,
    while <mergeMap> lets all of them finish.
- switchMap subscribes to most recent observable... unsubscribes from previous ones


`Switch functionality`
- we create an observable from the click event of a button using the fromEvent method. 
- The SwitchMap operator returns an observable using the interval method. 
- The interval method creates an infinite observable, which emits a sequence of integers spaced by a given time interval.
- When you click on the button, the clicks observable emits its first value. 
- The switchMap replaces it with the interval observable, which starts emitting value starting from 0 every 500ms.
- When you click again, the switchMap unsubscribes from the previous interval observable and starts new one, 
  which again starts to emit value from 0.

`Usage - switchMap`
- language changed; fetch new categories
- cart items changed; fetch new transport charges

```ts
this.storeTranslateService.activeLanguage$.pipe(
    switchMap(language => this.homeService.getHomeCategories(language.languageServiceId)),
    map(categoryList => categoryList)
)

this.initializeCart().pipe(
    tap(() => this.isCheckoutLoading = true),
    switchMap((cart) => { return this.cartService.getTransportCharges(cart.products, 'CART'); })
)


```