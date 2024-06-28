import { IndicatorPageComponent } from './indicator-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('IndicatorPageComponent', () => {
  let component: IndicatorPageComponent;
  let fixture: ComponentFixture<IndicatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
