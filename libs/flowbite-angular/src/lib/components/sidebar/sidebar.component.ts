import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarPageContentComponent } from './sidebar-page-content.component';
import type { SidebarClass, SidebarDisplayMode, SidebarTheme } from './sidebar.theme';
import { SidebarThemeService } from './sidebar.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, contentChild, inject, input, signal, untracked } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  template: `<ng-content />`,
  providers: [
    {
      provide: SidebarStateService,
      useFactory: () => {
        const service = inject(SidebarStateService, {
          skipSelf: true,
          optional: true,
        });

        return service || new SidebarStateService();
      },
    },
  ],
})
export class SidebarComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(SidebarThemeService);
  public readonly stateService = inject(SidebarStateService);
  public readonly sidebarMenuChild = contentChild(SidebarMenuComponent);
  public readonly sidebarPageContentChild = contentChild(SidebarPageContentComponent);

  public override contentClasses = signal<SidebarClass>(createClass({ rootClass: '' }));

  //#region properties
  public displayMode = input<keyof SidebarDisplayMode>('push');
  public isOpen = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isRounded = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<SidebarTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      displayMode: this.stateService.select('displayMode')(),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    this.stateService.setState({
      displayMode: this.displayMode(),
      isOpen: this.isOpen(),
    });
  }

  public override verify(): void {
    if (this.sidebarMenuChild() === undefined) {
      throw new Error('No SidebarMenuComponent available');
    }

    if (this.sidebarPageContentChild() === undefined) {
      throw new Error('No SidebarPageContentComponent available');
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
