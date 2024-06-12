import * as properties from './sidebar.theme';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import {
  Component,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { SidebarState } from '../../services/state/sidebar.state';
import { SignalStoreService } from '../../services/signal-store.service';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [SignalStoreService<SidebarState>],
})
export class SidebarComponent extends BaseComponent {
  protected sidebarSignalStoreService = inject<
    SignalStoreService<SidebarState>
  >(SignalStoreService<SidebarState>);

  protected override contentClasses = signal<properties.SidebarClass>(
    properties.SidebarClassInstance(),
  );

  //#region properties
  public isRounded = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<Partial<properties.SidebarBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        booleanToFlowbiteBoolean(this.isRounded()),
        this.customStyle(),
      )
    ) {
      const propertyClass = properties.getClasses({
        rounded: booleanToFlowbiteBoolean(this.isRounded()),
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
