import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'threeDecimals'
})
export class ThreeDecimalsPipe implements PipeTransform {

    // lets see how this pipe works... 
        // ThreeDecimalsPipe        vs          ProcessDecimalDirective
        
    transform(value: any, ...args: any[]) {
        console.log(value);
        return value
    }
    
}