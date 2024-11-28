import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRootComponent } from './report-root.component';

describe('ReportRootComponent', () => {
  let component: ReportRootComponent;
  let fixture: ComponentFixture<ReportRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
