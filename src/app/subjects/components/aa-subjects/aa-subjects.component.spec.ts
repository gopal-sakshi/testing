import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSubjectsComponent } from './aa-subjects.component';

describe('AaSubjectsComponent', () => {
  let component: AaSubjectsComponent;
  let fixture: ComponentFixture<AaSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
