import { AlertPageComponent } from './alert-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('AlertPageComponent', () => {
  let component: AlertPageComponent;
  let fixture: ComponentFixture<AlertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
