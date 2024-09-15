import { Component, OnInit } from '@angular/core';
import { JsStuff12Service } from '../../services/js-stuff12.service';

// lastValueFrom ===> introduced in Rxjs v7;
// import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app69-promise44',
    templateUrl: './promise44.component.html',
    styleUrls: ['./promise44.component.scss']
})
export class Promise44Component implements OnInit {

    constructor(private jsService: JsStuff12Service) { }

    ngOnInit(): void {
    }

    // FOR SOME REASON, THE LOGS PRINTED IN CONSOLE ARE IN CONFUSING ORDER... RUN THIS doStuff1() AND SEE FOR YOURSELF
    async doStuff1() {
        const totaley = await this.addNumbers1(2, 3, 4);        
        console.log('aa vacha entanta ', totaley);
    }


    async addNumbers1(num1: number, num2: number, num3: number): Promise<any> {
        
        // let observable23$ = this.jsService.getMockData();
        // const finalData = await lastValueFrom(observable23$)

        let data23 = await this.jsService.getMockData().toPromise();        
        console.log('after await ==> ', data23);
        return data23
    }
}
