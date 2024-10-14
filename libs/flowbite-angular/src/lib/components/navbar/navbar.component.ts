import type { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { NavbarBrandComponent } from './navbar-brand.component';
import { NavbarContentComponent } from './navbar-content.component';
import { NavbarToggleComponent } from './navbar-toggle.component';
import type { NavbarClass, NavbarColors, NavbarTheme } from './navbar.theme';
import { NavbarThemeService } from './navbar.theme.service';

import { NgClass } from '@angular/common';
import { booleanAttribute, Component, contentChild, inject, input, untracked } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  template: `<ng-content />`,
  providers: [
    {
      provide: NavbarStateService,
      useFactory: () => {
        const service = inject(NavbarStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new NavbarStateService();
      },
    },
  ],
})
export class NavbarComponent extends BaseComponent<NavbarClass> {
  public readonly themeService = inject(NavbarThemeService);
  public readonly stateService = inject(NavbarStateService);
  public readonly navbarBrandChild = contentChild(NavbarBrandComponent);
  public readonly navbarToggleChild = contentChild(NavbarToggleComponent);
  public readonly navbarContentChild = contentChild(NavbarContentComponent);

  //#region properties
  public color = input<keyof NavbarColors>('primary');
  public isRounded = input<boolean, unknown>(false, { transform: booleanAttribute });
  public hasBorder = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isFixed = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<NavbarTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): NavbarClass {
    return this.themeService.getClasses({
      hasBorder: booleanToFlowbiteBoolean(this.isRounded()),
      isRounded: booleanToFlowbiteBoolean(this.hasBorder()),
      isFixed: booleanToFlowbiteBoolean(this.isFixed()),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.navbarContentChild() === undefined) {
      throw new Error('No NavbarContentComponent available');
    }
  }
  //#endregion

  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.stateService.select('isOpen')());
    }

    this.stateService.set('isOpen', isOpen);
  }
}
