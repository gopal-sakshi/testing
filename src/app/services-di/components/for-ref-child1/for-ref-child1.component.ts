import { Component, Injector, OnInit } from '@angular/core';
import { ForwardRefClass } from '../../classes/forward-ref';

@Component({
  selector: 'app69-for-ref-child1',
  templateUrl: './for-ref-child1.component.html',
  styleUrls: ['./for-ref-child1.component.scss']
})
export class ForRefChild1Component extends ForwardRefClass implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  getPlayersComp() {
    this.getPlayers().pipe().subscribe(res => {
      console.log(res);
    });    
  }
}
