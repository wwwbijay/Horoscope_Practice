import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeHomeComponent } from './horoscope-home.component';

describe('HoroscopeHomeComponent', () => {
  let component: HoroscopeHomeComponent;
  let fixture: ComponentFixture<HoroscopeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoroscopeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
