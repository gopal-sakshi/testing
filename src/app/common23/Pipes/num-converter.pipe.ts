import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'numConverter'
})
export class NumberConverterPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        console.log(value);
        let res = `${value}`;
        value = Math.abs(+value);
        if(value >= 1000) {
            res = `${Math.round((value/1000) * 100) / 100} K`
        }
        return res;
    }

}