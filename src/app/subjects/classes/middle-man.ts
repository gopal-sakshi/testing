import { fromEvent } from "rxjs";
import { RxJsService } from "../services/rx-js-service";

export class MiddleMan {
    
    constructor(private rxjsService:RxJsService) {}

    startObservable() {
        this.rxjsService.tenSecondsObservable = null;        
    }

    makeServiceCalls() {
        this.rxjsService.getStrikers().subscribe(res => {
            console.log(res);
          });
      
          this.rxjsService.getMidfielders().subscribe(res => {
            console.log(res);
          });
      
          this.rxjsService.getFibonacci().subscribe(res => {
            console.log(res);
          });
    }
}