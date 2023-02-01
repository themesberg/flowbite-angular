import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonGroupComponent } from './content-button-group.component';

describe('ContentButtonGroupComponent', () => {
  let component: ContentButtonGroupComponent;
  let fixture: ComponentFixture<ContentButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
