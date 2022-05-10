import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CheckSnapshotService } from '../../services/check-snapshot.service';

@Component({
  selector: 'app69-message00',
  templateUrl: './message00.component.html',
  styleUrls: ['./message00.component.scss']
})
export class Message00Component implements OnInit {

  constructor(private route: ActivatedRoute, private snapshotservice: CheckSnapshotService) { }

  ngOnInit(): void {

    this.route.data.subscribe(res => {
      console.log(res);      
    });

    const blah = this.route.snapshot.queryParamMap.get('player');
    console.log(blah);

    const balh2 = this.route.snapshot['_routerState'].url;
    console.log(balh2);

  }

  snapshotQueryParam() {
    this.snapshotservice.checkSnapshot();
  }
}
