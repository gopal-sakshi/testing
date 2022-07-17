import { Component, Input } from '@angular/core';

@Component({
  selector: 'app69-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: any;

}
