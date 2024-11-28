import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReportComponent } from './manage-report.component';

describe('ManageReportComponent', () => {
  let component: ManageReportComponent;
  let fixture: ComponentFixture<ManageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
