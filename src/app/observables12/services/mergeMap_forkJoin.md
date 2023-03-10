`mergeMap`
- mergeMap is used when API requests are dependent ===> 
    when we need data from 1st API request to make requests to 2nd API.
- you don't have to wait for every HTTP request to complete. 
- you can react as they complete. 
- plus, you can handle errors easier (so if one request fails you can still continue with the other requests)
- But you have to handle your emitted values in the .subscribe() a little differently


`forkJoin`
- forkJoin is used when API requests are independent. 
    1st request doesnt depend on 2nd request to complete and can execute in parallel.
- data from all http requests --> loaded inside subscribe() method
- you have to wait for every HTTP request to finish before forkJoin emits the value


`concatMap`
- execute the requests in order. 
- Meaning it would wait for the first request to complete, and then send the next
- so as not to increase server capacity