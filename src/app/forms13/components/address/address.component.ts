import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app69-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

    @Input() formGroupName: string;
    form23: FormGroup;

    constructor(private rootFormGroup: FormGroupDirective) { }

    ngOnInit(): void {
        this.form23 = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;        
    }

}
