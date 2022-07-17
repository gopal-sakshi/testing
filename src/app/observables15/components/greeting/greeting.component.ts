import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
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


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser().pipe(takeUntil(this.unsubscribe)).subscribe(newUser => {
      this.user = newUser;
      console.log(this.user);
    });
  }


  // Comment this method ---> and see the console logs
  // ngOnDestroy(): void {
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }

}
