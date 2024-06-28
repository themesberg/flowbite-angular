import { FloatingLabelPageComponent } from './floating-label-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('FloatingLabelPageComponent', () => {
  let component: FloatingLabelPageComponent;
  let fixture: ComponentFixture<FloatingLabelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingLabelPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingLabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
