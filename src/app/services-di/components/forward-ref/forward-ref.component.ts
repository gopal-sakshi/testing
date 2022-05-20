import { Component, forwardRef, OnInit } from '@angular/core';
import { ForwardRefService } from '../../services/forward-ref.service';

@Component({
  selector: 'app69-forward-ref',
  templateUrl: './forward-ref.component.html',
  styleUrls: ['./forward-ref.component.scss'],
  providers: [
    {
      provide: 'GOPAL',
      useExisting: forwardRef(() => ForwardRefService)
    }
  ]
})
export class ForwardRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
