import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTagComponent } from './career-tag.component';

describe('CareerTagComponent', () => {
  let component: CareerTagComponent;
  let fixture: ComponentFixture<CareerTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
