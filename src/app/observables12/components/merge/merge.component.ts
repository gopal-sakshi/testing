import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

  ngOnInit(): void {}

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

  searchBro(event) {    
    this.searchString = event;
    this.mergeObservableService.searchRMAPlayer(this.searchString);
    this.mergeObservableService.searchPlayers(this.searchString).pipe(
      map((res) => {
        console.log(res); 
        return res
      }),
      map(res => res)).subscribe(res => {
        console.log('jing chak...');
      })
  }

}
