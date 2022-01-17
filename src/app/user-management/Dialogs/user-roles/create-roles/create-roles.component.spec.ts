import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRolesComponent } from './create-roles.component';

describe('CreateRolesComponent', () => {
  let component: CreateRolesComponent;
  let fixture: ComponentFixture<CreateRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
