import { TestBed } from "@angular/core/testing";
import { CoursesCardListComponent } from "./courses-card-list.component";

describe('CoursesListCardComponent', () => {

    beforeEach(() => {
        // this beforeEach() block = to initialise our tests... 

        // Just like how we tested courses.service.ts ---> here, 
            // we use TestBed inorder to setup TestingModule

        // we will add everything (that is needed by our component to run) to this testing module
        TestBed.configureTestingModule({
            providers: [],       // any services that our component needs goes here... 
                                    // generally, we use this only for container components & not presentational components
            
            declarations: [CoursesCardListComponent]        // add all the components, that our component needs here...
                                                                // but as you can see... we have many components that this
                                                                // CoursesCardListComponent uses... like mat-card (oR) 
                                                                // mat-card-header...
                                                            // so, thats why we use imports
        })
    })

    it('should_create_component', () => {

    });

    it('should_display_courses', () => {

    });

    it('should_display_the_first_course', () => {

    });

})