import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ClassManuallyInjected } from '../../classes/class-manually-injected';
import { ProductService } from '../../classes/product.service';
import { someClassTokenByInjectionToken, someStringTokenByInjectionToken } from '../../types/tokens';

@Component({
  selector: 'app-token-types',
  templateUrl: './token-types.component.html',
  styleUrls: ['./token-types.component.css'],
  providers: [ProductService]
})
export class TokenTypesComponent implements OnInit {

  constructor(
    public productServiceClassToken: ProductService,
    // @Inject('someStringToken') public someString:string,
    // @Inject('function456') public someFunction,
    @Inject(someStringTokenByInjectionToken) public anotherString:string,
    @Inject(someClassTokenByInjectionToken) public anotherClass:ClassManuallyInjected
    // @Inject('myFunction') public localFactoryFunction:any,
    // @Inject('myFunctionUseValue') public localFactoryFunctionUseValue:any
  ) { }

  ngOnInit(): void {

    //this.localFactoryFunction;
            // we injected a function into the localFactoryFunction (see factoryFunction in 'tokens.ts')
            // hence this statement, executes whatever is in that factoyFunction in 'tokens.ts'
            // we used useFactory to do this...

    //this.localFactoryFunctionUseValue();


    //console.log(this.someFunction);

    console.log(this.anotherString);
    this.anotherClass.someMethod1();
  }

}


/*
    The Problem with the string tokens is that
      two developers can use the same string token at a different part of the app.
      may be third-party modules, which may use the same token...
      If the token is reused, the last to register overwrites all previously registered tokens.

    Hence, we InjectionToken

    The Angular provides InjectionToken class so as to ensure that the Unique tokens are created. The Injection Token is created by creating a new instance of the InjectionToken class.

*/
