import { ControlValueAccessor, FormControl } from '@angular/forms';


export abstract class FormControlRating implements ControlValueAccessor {


    rating = new FormControl('');


    /**
     * On change function binding reference for formControlName
     */
    onChange: (value) => {};

    /**
     * On touched function binding reference for formControlName
     */
    onTouched: () => {};

    constructor() {}

    /**
     * Gets the latest changes and return back to the form control
     */
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.rating.value);
        }
    }

    /**
     * Writes the value to the form control
     * @param val
     */
    writeValue(val: any): void {
        this.rating.patchValue(val);
    }

    /**
     * Register `onChange` function with our custom function.
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Register `onTouched` function with our custom function.
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }


    /**
     * Adding rating to the form control
     */
    addRating(ratingIndex) {        
        this.rating.patchValue(ratingIndex + 1);
        console.log('rating changed to ', this.rating?.value)
        this.notifyValueChange();
    }

}
