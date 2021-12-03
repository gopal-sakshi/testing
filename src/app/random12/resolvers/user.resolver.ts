import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MockUserDataService } from './mock-user-data.service';



@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
    constructor(private userService: MockUserDataService) { }

    resolve(): Observable<any> {
        // var blah = this.userService.getUsers();
        // console.log(blah);
        // return blah;
        //return of('gopal', 'sakshi', 'rm');
        return of(['gopal', 'sakshi', 'rm']);
    }
}

/*

Resolve
- Interface that classes can implement to be a data provider.
- A data provider class 
    used with the router = to resolve data during navigation
- The interface defines a resolve() method 
    It is invoked when the navigation starts. 
    The router waits for the data to be resolved before the route is finally activated.
- Because sometimes, before the route is activated... data needs to be fetched... only after fetching data, route will be activated
    Resolve class precisely does that...

*/