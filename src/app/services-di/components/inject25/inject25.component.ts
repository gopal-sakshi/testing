import { Component, Inject, OnInit } from '@angular/core';
import { Inject25A } from '../../services/inject25a.service';
import { Inject25B } from '../../services/inject25b.service';

const CONDITION = {retired: false}
@Component({
  selector: 'app69-inject25',
  templateUrl: './inject25.component.html',
  styleUrls: ['./inject25.component.scss']
})
export class Inject25Component implements OnInit {

  constructor(@Inject(CONDITION.retired ? Inject25A : Inject25B) private myMidfield) { }

  ngOnInit(): void {
    var names = this.myMidfield.getNames();      // conditional injection
                                                  // either RM's retired midfield (or) RM's current midfield will get consoled
                                                  // based on CONDITION.retired property
    console.log(names);
  }

}
