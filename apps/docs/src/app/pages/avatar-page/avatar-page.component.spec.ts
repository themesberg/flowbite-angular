import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPageComponent } from './avatar-page.component';

describe('AvatarPageComponent', () => {
  let component: AvatarPageComponent;
  let fixture: ComponentFixture<AvatarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
