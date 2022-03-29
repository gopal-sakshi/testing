import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Football23Component } from './football23.component';

describe('Football23Component', () => {
  let component: Football23Component;
  let fixture: ComponentFixture<Football23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Football23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Football23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
