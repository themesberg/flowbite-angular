import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocsComponent } from './docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
