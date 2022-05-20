import { Component, OnInit, ViewChild } from '@angular/core';
import { map, merge } from 'rxjs/operators';
import { MergeObservableService } from '../../services/mergeObs.service';

@Component({
  selector: 'app69-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  @ViewChild('templateForm23') templateForm23:any;
  realMadridPlayers:string[] = [];
  offset:number = 0;
  morePlayers:boolean = true;
  searchString:any;
  heroInputObs:any;

  constructor(private mergeObservableService:MergeObservableService) { }

  ngOnInit(): void {
    // this.heroInputObs = this.templateForm23.valueChanges().pipe();    
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

  searchBro(event) {    
    this.searchString = event;
    // this.mergeObservableService.searchRMAPlayer(this.searchString);
    this.doStuffBeforeSearch(this.searchString);
  }

  doStuffBeforeSearch(searchWord:string) {
    this.mergeObservableService.searchPlayers(this.searchString).pipe(
      map((res) => {
        console.log(res); 
        return res
      }),
      map(res => res)).subscribe(res => {
        console.log('jing chak...');
      })
  }

  submitNobelHero() {
    console.log(this.templateForm23);
    const searchName = this.templateForm23.form.value.hero_name;
    const result = this.mergeObservableService.searchNobelPlayers(searchName);
    console.log(result);
  }

}
