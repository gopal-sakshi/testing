import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app69-home-router13',
  templateUrl: './home-router13.component.html',
  styleUrls: ['./home-router13.component.scss']
})
export class HomeRouter13Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToInbox() {
    this.router.navigate(['/router13', 'inbox']);
  }

  navigateToOutbox() {
    this.router.navigate(['/router13', 'outbox']);
  }
}
