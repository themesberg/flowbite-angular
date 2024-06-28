import { SidebarPageComponent } from './sidebar-page.component';

import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

describe('SidebarPageComponent', () => {
  let component: SidebarPageComponent;
  let fixture: ComponentFixture<SidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
