import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app69-reactive12',
  templateUrl: './reactive12.component.html',
  styleUrls: ['./reactive12.component.scss']
})
export class Reactive12Component implements OnInit {

  reactiveForm1:FormGroup
  addresses:any[] = [
    { city: 'Madrid', country: 'Spain' },
    { city: 'Barcelona', country: 'Spain' },
    { city: 'Milan', country: 'Italy' },
    { city: 'Munich', country: 'Germany' }
  ];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm1 = this.formBuilder.group({
      clubName: new FormControl('', [ Validators.required, Validators.pattern(/[^0-9]/)]),
      stadiumName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      address: ['', Validators.required],
      players: this.formBuilder.array([])
    })
  }

  get players() {    
    return this.reactiveForm1.controls["players"] as FormArray;
  }

  addPlayer() {
    const player = this.formBuilder.group({
      playerName: ['', [Validators.required, Validators.minLength(4)]],
      position: ['', Validators.required]
    });
    this.players.push(player);
  }

  submitForm() {
    console.log(this.reactiveForm1);
  }

}
