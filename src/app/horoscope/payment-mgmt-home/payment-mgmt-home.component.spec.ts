import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMgmtHomeComponent } from './payment-mgmt-home.component';

describe('PaymentMgmtHomeComponent', () => {
  let component: PaymentMgmtHomeComponent;
  let fixture: ComponentFixture<PaymentMgmtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMgmtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMgmtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
