the class is the basis of all object oriented applications, 
Similarly, common design patterns set guidelines & expectations for different types of classes: 
    models, services, repositories, factories 


A common mistake new Angular developers make is to treat a Component as a page in its entirety. 
- The Angular router directly maps routes to pages, 
    therefore it is a simple jump mentally to make that Component responsible for all of the content within that page.  
- While this is generally a good place to start when developing, careful attention should be paid to the Component
    to continually refactor and break it into smaller chunks.  
    This helps maintain a key Angular design principal: `Components should have a single responsibility`

- A page is not a single component
- Or it doesnt necessarily mean ---> a single page must contain a component displaying all the data
- A route is a single page
    but that single page can have many components


They may be called with different names, but the idea is same
- `components that are responsible for loading & manipulating data` 
- `Components that are responsible for presentation and display of that data` 
- different names
    smart vs dumb
    presentation vs pure components
    application, controller, container components


smart components 
- they act as your controller, 
- binding service layer data to your dumb components through Inputs & Outputs. 
- Smart components have very little display logic 
-----------------------------------------------------------------------------------------------------------------------------------

Separated & Isolated components ----> easy to test, maintain



Search45 component
- we will never re-use this component, 
- This smart45 component - has two responsibilities
    router endpoint
    interaction with server


- it’s responsibility is to be a `router endpoint` and handle the logic at that specific location.
    router endpoint ---> particular webpage Url ----> http://localhost:9999/design23/search45?searchTerm=mango
- It also binds the service layer to the actions taken within the application, but has no concern for the implementation of that action.
    It doesn’t matter if a selection is made with a button click, a drag-and-drop, gestures, or any other input method. 
        However, whatever user does ---> dumb component must send it to smart component... smart component captures it via event emitter
    The dumb components are responsible for translating user actions into an interface that is easy to predict and understand
    Plus, validation duty is also dumb components'. They must validate & emit response to smart component...
    Basically, smart component doesnt worry about anything - what user entered, how he entered, or stuff


# Styling
- Each component's template becomes very small
    look at item component ---> It has just two lines {{item?.name}}, {{item?.description}}
    yes, this is a side-effect of this design (splitting components)... but it doesnt matter
- It’s easy for the smart component to place dumb-components in any of the `various locations and with different set widths `
    full with on top, or a narrow pinned side bar.
    Is the page a stacked design with the search on top of the results?  
    (or) Is is a pinned side bar and scrolling results
- This separation of responsibility helps maintain a complete
    plug and play type of architecture 
    greatly reduces the effort of any redesign. 