import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRootComponent } from './patient-root.component';

describe('PatientRootComponent', () => {
  let component: PatientRootComponent;
  let fixture: ComponentFixture<PatientRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
