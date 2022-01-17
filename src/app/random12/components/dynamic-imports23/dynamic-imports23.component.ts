import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-imports23',
  templateUrl: './dynamic-imports23.component.html',
  styleUrls: ['./dynamic-imports23.component.scss']
})
export class DynamicImports23Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicImportDom12() {
    console.log("trying dynamic imports");
    
    // only because we used finally(), we are able to dynamically import dom23 module
    import('../../../dom12/dom12.module').then(m=> m.Dom12Module).finally(() =>{
      console.log("waituuu");
    });

    
  }

  dynamicImportRouteGuards() {
    // not using finally()
    import('../../../route-guards/route-guards.module').then(m => m.RouteGuardsModule)
    // for some reason, even this got lazy loaded... finally doesnt seem to make a difference
  }
}
