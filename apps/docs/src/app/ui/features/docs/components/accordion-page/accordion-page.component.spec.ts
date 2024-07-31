import { AccordionPageComponent } from './accordion-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('AccordionPageComponent', () => {
  let component: AccordionPageComponent;
  let fixture: ComponentFixture<AccordionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
