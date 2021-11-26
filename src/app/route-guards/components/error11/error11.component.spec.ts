import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error11Component } from './error11.component';

describe('Error11Component', () => {
  let component: Error11Component;
  let fixture: ComponentFixture<Error11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
