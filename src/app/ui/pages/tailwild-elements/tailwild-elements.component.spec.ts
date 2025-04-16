import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwildElementsComponent } from './tailwild-elements.component';

describe('TailwildElementsComponent', () => {
  let component: TailwildElementsComponent;
  let fixture: ComponentFixture<TailwildElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwildElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwildElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
