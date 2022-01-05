import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYearlyComponent } from './create-yearly.component';

describe('CreateYearlyComponent', () => {
  let component: CreateYearlyComponent;
  let fixture: ComponentFixture<CreateYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateYearlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
