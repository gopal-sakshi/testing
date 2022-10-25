/*
        ngx-translate/core works file
        we will use directive ========> <div translate>Real Madrid</div> 
        we will use pipe =============> <div> {{ clubName | translate }} </div>

    But using Swal.fire({ html: '' }) ===============> here, translate pipe is not getting applied... 
                                                        so, we will see what we can do
*/


import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Pipe({
  name: 'translateSwal'
})

export class TranslateSwalPipe extends TranslatePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return super.transform(value, args)
  }
}