import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwildResponsiveComponent } from './tailwild-responsive.component';

describe('TailwildResponsiveComponent', () => {
  let component: TailwildResponsiveComponent;
  let fixture: ComponentFixture<TailwildResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwildResponsiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwildResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
