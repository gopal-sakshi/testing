import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const jingChakSarissa = [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AddMinusComponent),
        multi: true
    }
];
@Component({
    selector: 'app69-add-minus',
    templateUrl: './add-minus.component.html',
    styleUrls: ['./add-minus.component.scss'],
    providers: jingChakSarissa
})
export class AddMinusComponent implements OnInit {

    @Input() min: number = 1;
    @Input() max: number = 10;
    
    value = 1;
    onChange: any = () => { };
    onTouched: any = () => { };
    disabled: boolean = false;
    writeValue(value: number): void { this.value = value; }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

    

    constructor() { }

    ngOnInit(): void {
    }

    increase() {
        if (typeof this.max === 'undefined' || this.value < this.max) {
            this.value++;
            this.onChange(this.value);
        }
    }

    decrease() {
        if (typeof this.min === 'undefined' || this.value > this.min) {
            this.value--;
            this.onChange(this.value);
        }
    }



}