import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact11Component } from './contact11.component';

describe('Contact11Component', () => {
  let component: Contact11Component;
  let fixture: ComponentFixture<Contact11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contact11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
