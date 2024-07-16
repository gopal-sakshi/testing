import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app69-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  user = { name: '' };
  unsubscribe = new Subject<any>();
  sub1:Subscription;
  sub2:Subscription;


  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // use of takeUntil
    this.sub1 = this.userService.currentUser().pipe(
        takeUntil(this.unsubscribe)
    ).subscribe(newUser => {
      this.user = newUser;
      console.log("new user with takeUntil ===> ", this.user);
    });

    this.sub2 = this.userService.currentUser().pipe().subscribe(newUser => {
      console.log("just newUser ===> ", newUser);
    });
  }


  // Comment this method ---> and see the console logs
  ngOnDestroy(): void {

    // APPROACH 01 ===> takeUntil() will stop NOW; so, sub1 will die; no need to unsubscribe
    this.unsubscribe.next();
    this.unsubscribe.complete();

    // // APPROACH 02 ===>
    // this.sub1.unsubscribe();
    // this.sub2.unsubscribe();


  }

}
