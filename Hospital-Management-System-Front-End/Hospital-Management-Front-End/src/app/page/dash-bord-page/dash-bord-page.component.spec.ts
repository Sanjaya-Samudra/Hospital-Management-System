import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordPageComponent } from './dash-bord-page.component';

describe('DashBordPageComponent', () => {
  let component: DashBordPageComponent;
  let fixture: ComponentFixture<DashBordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
