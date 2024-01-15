import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPageComponent } from './breadcrumb-page.component';

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
