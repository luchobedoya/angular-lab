import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionOneComponent } from './view-transition-one.component';

describe('ViewTransitionOneComponent', () => {
  let component: ViewTransitionOneComponent;
  let fixture: ComponentFixture<ViewTransitionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransitionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
