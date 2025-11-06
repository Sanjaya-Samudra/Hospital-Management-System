import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRootComponent } from './appointment-root.component';

describe('AppoimtmentRootComponent', () => {
  let component: AppointmentRootComponent;
  let fixture: ComponentFixture<AppointmentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
