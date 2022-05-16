import { Component, OnInit } from '@angular/core';
import { MergeObservableService } from '../../services/mergeObs.service';

@Component({
  selector: 'app69-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  realMadridPlayers:string[] = [];
  offset:number = 0;
  morePlayers:boolean = true;
  searchString:any;

  constructor(private mergeObservableService:MergeObservableService) { }

  ngOnInit(): void {
    this.searchString
  }

  getPlayers() {
    this.mergeObservableService.getPlayersFiveAtOnce(0).pipe().subscribe(res => {
      console.log(res);
      this.offset = this.offset + res.length;
      this.realMadridPlayers.push(...res);
    });
  }

  getMorePlayers() {
    this.mergeObservableService.getPlayersFiveAtOnce(this.offset).pipe().subscribe(res => {
      console.log(res);
      this.offset = this.offset + res.length;
      this.realMadridPlayers.push(...res);
    });
  }

}
