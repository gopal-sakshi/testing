import { Component, forwardRef, Inject, Injectable, OnInit } from '@angular/core';
import { ForwardRefService } from '../../services/forward-ref.service';

const jingChak22 = {
    provide: 'GOPAL',
    useExisting: forwardRef(() => ForwardRefService)
};


@Component({
    selector: 'app69-forward-ref',
    templateUrl: './forward-ref.component.html',
    styleUrls: ['./forward-ref.component.scss'],
    providers: [jingChak22]                                              // using forwardRef
    // providers: [{ provide: 'GOPAL', useClass: ForwardRefService }]         // not using forwardRef
})
export class ForwardRefComponent {
    constructor(private frs:ForwardRefService,
        public p23s:Time23Service,                                   // LATERRRRR
        // @Inject(forwardRef(() => Time23Service )) public p23s: any      // LATERRRR
    ) { }

    ngOnInit() {
        this.frs.getPlayers().subscribe(res => {
            console.log("players ===> ", res)
        });
        console.log("time23 ===> ", this.p23s.getTime())
    }
}

@Injectable()
export class Time23Service {
    getTime():string { return `${Date.now()}__present_time` }
}


/*
    https://stackoverflow.com/questions/50894571/what-does-do-forwardref-in-angular
    forwardRef === Allows to refer to references which are not yet defined.
    Time23Service is hoisted as "undefined" at the start... 
    so, p23s takes in undefined while compiling and generating "main.js"
    thats why use forwardRef... main.js is bundled such a way that p23s will get its value @ runtime
*/
