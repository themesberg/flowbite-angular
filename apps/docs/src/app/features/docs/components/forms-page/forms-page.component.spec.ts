import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPageComponent } from './forms-page.component';

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
