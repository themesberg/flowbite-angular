import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldPageComponent } from './input-field-page.component';

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
