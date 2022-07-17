# Avoiding leaks
- we can unsubscribe the the Observable
- But it can add a fair amount of similar code to every subscription
- we need to unsubscribe from Observables. 
    But it seems, we do not need to specifically do this for http calls from HttpClient         
    meaning, we dont have to unsubscribe from http calls ???

# Some ways
- Limit subscriptions
    by modifying design ---> using dumb & smart components
    reduce the number of subscriptions & convert them into inputs
    only 'higher level controller' components ---> will `subscribe`
    dumb components get them as `inputs` from smart components
- Async pipe
    async pipe handles subscriptions and will unsubscribe for you
    if you only need data in the view -----------> then you don’t need to subscribe in the component.
- design stuff
    create a reusable component (or) base class
    Create a base class that provides a core that can be used to unsubscribe
    all other components inherit from this base class ---> all observables handled in this ngOnDestroy() method


