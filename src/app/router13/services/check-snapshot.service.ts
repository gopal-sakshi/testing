import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class CheckSnapshotService {    
    
    constructor(private route:ActivatedRoute) {}

    checkSnapshot() {
        const blah = this.route.snapshot.queryParamMap.get('player');
        console.log(blah);
    }

}