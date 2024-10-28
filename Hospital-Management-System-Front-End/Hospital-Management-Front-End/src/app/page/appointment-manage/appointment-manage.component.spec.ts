import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentManageComponent } from './appointment-manage.component';

describe('AppointmentManageComponent', () => {
  let component: AppointmentManageComponent;
  let fixture: ComponentFixture<AppointmentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
