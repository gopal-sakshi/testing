import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject23Component } from './subject23.component';

describe('Subject23Component', () => {
  let component: Subject23Component;
  let fixture: ComponentFixture<Subject23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subject23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subject23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
