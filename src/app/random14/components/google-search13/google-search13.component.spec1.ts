import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearch13Component } from './google-search13.component';

describe('GoogleSearch13Component', () => {
  let component: GoogleSearch13Component;
  let fixture: ComponentFixture<GoogleSearch13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSearch13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSearch13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
