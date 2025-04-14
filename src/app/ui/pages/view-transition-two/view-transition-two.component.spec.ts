import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionTwoComponent } from './view-transition-two.component';

describe('ViewTransitionTwoComponent', () => {
  let component: ViewTransitionTwoComponent;
  let fixture: ComponentFixture<ViewTransitionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransitionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
