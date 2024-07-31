import { BadgePageComponent } from './badge-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BadgePageComponent', () => {
  let component: BadgePageComponent;
  let fixture: ComponentFixture<BadgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePageComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
