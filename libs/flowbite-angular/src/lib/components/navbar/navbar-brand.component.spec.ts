import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarBrandComponent } from './navbar-brand.component';

describe('NavbarBrandComponent', () => {
  let component: NavbarBrandComponent;
  let fixture: ComponentFixture<NavbarBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBrandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
