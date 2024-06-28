import { InputFieldPageComponent } from './input-field-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('InputFieldPageComponent', () => {
  let component: InputFieldPageComponent;
  let fixture: ComponentFixture<InputFieldPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
