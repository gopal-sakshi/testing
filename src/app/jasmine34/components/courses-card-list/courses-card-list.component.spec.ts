import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";
import { Jasmine34Module } from "../../jasmine34.module";
import { CoursesCardListComponent } from "./courses-card-list.component";

describe('CoursesListCardComponent', () => {

    // declaration of variable
    let component:CoursesCardListComponent;

    // in order to create an instance of a component... we need a component fixture
        // ComponentFixture = a test utility type... that helps us in some common test operations
    let fixture:ComponentFixture<CoursesCardListComponent>

    // fixture.     // gives 'fixture_testing_utility' API
                        // it gives component instance
                        // it gives detectChanges ---> to manually detect changes
                        // it gives nativeElement ---> access DOM

    // this async is not be confused with typescript async-await... its angular's async
        // this angular async receives another function as an argument
        // it waits for any asynchronous operation launched by the function it received as argument
        // note: async is depcreated... now use waitForAsync
    beforeEach(waitForAsync(  () => {        
        TestBed.configureTestingModule({
            // instead of declarations array... we import here - such a module 
                // a module that contains all the components that our application needs
            imports: [Jasmine34Module]
        })
            .compileComponents().   // this returns a promise... Note: component compilation of angular = async process
            then(() => {        // it is only inside then() block we will setup our test environment
                fixture = TestBed.createComponent(CoursesCardListComponent);

                // grab an instance of the component... and store it in component
                component = fixture.componentInstance
            })       // the then() block is async... so, it will get executed after the it() block executes...
                        // but component was created only in then block...
    })   )

    it('should_create_component', () => {
        expect(component).toBeTruthy();
        // console.log(component);
    });

    it('should_display_courses', () => {
        pending();
    });

    it('should_display_the_first_course', () => {
        pending();
    });

})