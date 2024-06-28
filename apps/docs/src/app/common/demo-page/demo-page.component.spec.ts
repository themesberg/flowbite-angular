import { DemoPageComponent } from './demo-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('DemoPageComponent', () => {
  let component: DemoPageComponent;
  let fixture: ComponentFixture<DemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
