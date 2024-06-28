import * as properties from './sidebar.theme';

import { BaseComponent } from '../base.component';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { SidebarThemeService } from './sidebar.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  OnInit,
  booleanAttribute,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
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
  protected override contentClasses = signal<properties.SidebarClass>(
    properties.SidebarClassInstance,
  );

  protected readonly themeService = inject(SidebarThemeService);
  protected readonly sidebarStateService: SidebarStateService =
    inject(SidebarStateService);

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isRounded = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.SidebarBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      isOpen: booleanToFlowbiteBoolean(
        this.sidebarStateService.select('isOpen')(),
      ),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    super.ngOnInit();

    effect(
      () => {
        this.sidebarStateService.set('isOpen', this.isOpen());
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }
}
