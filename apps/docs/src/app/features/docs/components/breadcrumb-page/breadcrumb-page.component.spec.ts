import { BreadcrumbPageComponent } from './breadcrumb-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('BreadcrumbPageComponent', () => {
  let component: BreadcrumbPageComponent;
  let fixture: ComponentFixture<BreadcrumbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
