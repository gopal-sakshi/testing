import { ControlValueAccessor, FormControl } from '@angular/forms';


export abstract class FormControlRating implements ControlValueAccessor {

    rating = new FormControl('');
    
    onChange: (value) => {};
    onTouched: () => {};
    registerOnChange(fn: any): void { this.onChange = fn; }    
    registerOnTouched(fn: any): void { this.onTouched = fn; }

    constructor() {}

    /** Writes the value to the form control */
    writeValue(val: any): void {
        this.rating.patchValue(val);
    }
    
    /** Adding rating to the form control */
    addRating(ratingIndex) {        
        this.rating.patchValue(ratingIndex + 1);
        console.log('rating changed to ', this.rating?.value)
        if (this.onChange) { this.onChange(this.rating.value); }
    }

}