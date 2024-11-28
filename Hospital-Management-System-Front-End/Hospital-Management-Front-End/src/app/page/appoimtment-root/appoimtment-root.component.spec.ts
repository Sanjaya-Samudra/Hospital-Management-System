import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimtmentRootComponent } from './appoimtment-root.component';

describe('AppoimtmentRootComponent', () => {
  let component: AppoimtmentRootComponent;
  let fixture: ComponentFixture<AppoimtmentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoimtmentRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoimtmentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
