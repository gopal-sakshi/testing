import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SwitchMap22Service } from '../../services/switch-map-22.service';

@Component({
  selector: 'app69-switch-map22',
  templateUrl: './switch-map22.component.html',
  styleUrls: ['./switch-map22.component.scss']
})
export class SwitchMap22Component implements OnInit {

  input1:string;
  form22:FormGroup;
  clubInputChangedObs:Observable<any>;
  stadiumInputChangedObs:Observable<any>;
  
  constructor(private formBuilder:FormBuilder, private switchMap22service:SwitchMap22Service) { }

  ngOnInit(): void {
    this.form22 = this.formBuilder.group({
      clubName: ['', Validators.required],
      stadiumName: ['']
    });

    this.clubInputChangedObs = this.form22.get('clubName').valueChanges;              // uses switchMap
    this.stadiumInputChangedObs = this.form22.get('stadiumName').valueChanges;        // doesnt USE switchMap

    merge(this.clubInputChangedObs).pipe(
      map(res => {console.log('valueChanged'); return res}),
      switchMap(_=>this.switchMap22service.searchClubs1(this.clubNameSearchKeyword))
    ).subscribe(res => { console.log(res)});

    merge(this.stadiumInputChangedObs).pipe(
      map(res => {console.log('valueChanged'); return res}),
      map(_=>this.switchMap22service.searchClubs1(this.stadiumNameSearchKeyword))
    ).subscribe(res => { console.log(res)});

  }

  get clubNameSearchKeyword():string {
    return this.form22.get('clubName').value;
  }

  get stadiumNameSearchKeyword():string {
    return this.form22.get('stadiumName').value;
  }

  submit1() {
    console.log(this.form22);
  }

  search1() {
    var result = this.switchMap22service.searchClubs1('Real');
    console.log(result);
  }

}
