import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, interval, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap, throttle, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app69-observable62',
    templateUrl: './observable62.component.html',
    styleUrls: ['./observable62.component.scss']
})
export class Observable62Component implements OnInit {
    form29: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form29 = this.formBuilder.group({
            clubName: ['', Validators.required],
            stadiumName: ['', Validators.required],
            managerName: ['', Validators.required],
            city: ['', Validators.required],
            nickname1: ['', Validators.required],
            nickname2: ['', Validators.required]
        });

        // DEBOUNCE ===> next change considered only after 3000 seconds
        this.form29.get('clubName').valueChanges.pipe(
            debounceTime(3000),
            distinctUntilChanged(),
            filter((searchKeyword) => typeof searchKeyword === 'string' && searchKeyword.length > 3)
        ).subscribe(res => { console.log("input value changed ===> ", res); });

        // NO DEBOUNCE, NO THROTTLE
        this.form29.get('stadiumName').valueChanges.pipe(
            tap(val => val)
        ).subscribe(res => { console.log("not using debounce here ", res); });

        // THROTTLE ===> change propagated only ONCE in 1 second
        this.form29.get('managerName').valueChanges.pipe(
            tap(val => val),
            throttle(() => interval(1000))
        ).subscribe(res => { console.log("not using debounce here ", res); });

        // THROTTLE ===> change propagated only ONCE in 3 seconds
        this.form29.get('city').valueChanges.pipe(
            tap(val => val),
            throttleTime(3000)
        ).subscribe(res => { console.log("not using debounce here ", res); });

        combineLatest([
            this.form29.get('nickname1').valueChanges,
            this.form29.get('nickname2').valueChanges
        ]).pipe(
            switchMap(([n1, n2]) => {
                console.log("n1 ===> ", n1);
                console.log("n2 ===> ", n2);
                return of(false)
            })
        ).subscribe(res => { console.log("response of combineLatest ===> ", res); })
    }

}
