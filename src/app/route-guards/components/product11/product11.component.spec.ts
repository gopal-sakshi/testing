import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product11Component } from './product11.component';

describe('Product11Component', () => {
  let component: Product11Component;
  let fixture: ComponentFixture<Product11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
