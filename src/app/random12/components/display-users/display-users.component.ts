import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  
  public users:any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // this component gets its data from ActivatedRoute service’s data object, under the key "data_is_stored_key"
    this.route.data.subscribe(data => {             
      console.log("inside here... ");
      this.users = data.data_is_stored_here_key || [];
    });
  }

}
