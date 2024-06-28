import { FormsPageComponent } from './forms-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('InputPageComponent', () => {
  let component: FormsPageComponent;
  let fixture: ComponentFixture<FormsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
