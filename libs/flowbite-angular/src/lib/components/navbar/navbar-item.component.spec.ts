import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarItemComponent } from './navbar-item.component';

describe('NavbarItemComponent', () => {
  let component: NavbarItemComponent;
  let fixture: ComponentFixture<NavbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
