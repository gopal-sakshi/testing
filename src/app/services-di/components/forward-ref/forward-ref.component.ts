import { Component, forwardRef, OnInit } from '@angular/core';
import { ForwardRefService } from '../../services/forward-ref.service';

const jingChak22 = {
  provide: 'GOPAL',
  useExisting: forwardRef(() => ForwardRefService)
};

@Component({
  selector: 'app69-forward-ref',
  templateUrl: './forward-ref.component.html',
  styleUrls: ['./forward-ref.component.scss'],
  // providers: [jingChak22]                                              // using forwardRef
  providers: [ {provide: 'GOPAL', useClass: ForwardRefService } ]         // not using forwardRef
})
export class ForwardRefComponent {

  constructor() { }  

}
