import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkThemeToggleComponent } from '.';

describe('DarkThemeToggleComponent', () => {
  let component: DarkThemeToggleComponent;
  let fixture: ComponentFixture<DarkThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkThemeToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
