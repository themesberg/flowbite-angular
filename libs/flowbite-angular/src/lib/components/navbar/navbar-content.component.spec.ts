import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarContentComponent } from './navbar-content.component';

describe('NavbarContentComponent', () => {
  let component: NavbarContentComponent;
  let fixture: ComponentFixture<NavbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
