import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app69-address12',
    templateUrl: './address12.component.html',
    styleUrls: ['./address12.component.scss']
})
export class Address12Component implements OnInit {

    address12: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.address12 = this.formBuilder.group({
            // user: this.formBuilder.group({
            //     firstName: ['' ],
            //     lastName: ['lastName23', Validators.minLength(4)],
            //     email: []
            // }),
            user: '',
            city: ['Madrid', Validators.minLength(3)],
            country: ['']
        });
    }

    logForm11() {
        console.log(this.address12);
    }
}
