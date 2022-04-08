import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit {

  products23 = [
    {
      productName: 'topLevel name - 1',
      level3Product: {
        l3Name: 'this is l3 name - 1',
        price: '44 rupees'
      },
      referenceSku: {
        rSkuName: 'r sku name - 1',
        price: '45 rupees'
      }
    },
    {
      productName: 'topLevel name - 2',
      level3Product: {
        l3Name: 'this is l3 name - 2',
        price: '44 rupees'
      },
      referenceSku: {
        rSkuName: 'r sku name - 2',
        price: '45 rupees'
      }
    },
    {
      productName: 'topLevel name - 3',
    },
    {
      productName: 'topLevel name - 4',
      referenceSku: {
        rSkuName: 'r sku name - 4',
        price: '45 rupees'
      }
    },
  ]
  
  showSignin:boolean = false;
  showSignup:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.showSignin = !this.showSignin;
  }

  gotoSignUp() {
    this.showSignup = !this.showSignup;
  }

}
