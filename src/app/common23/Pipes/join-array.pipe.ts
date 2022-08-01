import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray'
})
export class JoinArrayPipe implements PipeTransform {

  transform(value: string[], args: string  = '\n'): any {
    return Array.isArray(value) ? value.join(args) : value;
  }

}