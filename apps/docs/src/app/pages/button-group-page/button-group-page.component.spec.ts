import { ComponentFixture, TestBed } from '@angular/core/testing';

import ButtonGroupPageComponent from './button-group-page.component';

describe('ButtonGroupPageComponent', () => {
  let component: ButtonGroupPageComponent;
  let fixture: ComponentFixture<ButtonGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
