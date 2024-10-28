import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientManageComponent } from './patient-manage.component';

describe('PatientManageComponent', () => {
  let component: PatientManageComponent;
  let fixture: ComponentFixture<PatientManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
