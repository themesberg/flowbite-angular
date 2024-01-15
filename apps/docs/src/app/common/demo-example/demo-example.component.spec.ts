import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExampleComponent } from './demo-example.component';

describe('DemoExampleComponent', () => {
  let component: DemoExampleComponent;
  let fixture: ComponentFixture<DemoExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
