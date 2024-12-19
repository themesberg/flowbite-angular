import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_BADGE_COLOR_DEFAULT_VALUE = new InjectionToken<keyof BadgeColors>(
  'FLOWBITE_BADGE_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_HAS_BORDER_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BADGE_HAS_BORDER_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_SIZE_DEFAULT_VALUE = new InjectionToken<keyof BadgeSizes>(
  'FLOWBITE_BADGE_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_IS_ICON_ONLY_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BADGE_IS_ICON_ONLY_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_IS_PILL_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BADGE_IS_PILL_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<BadgeTheme>
>('FLOWBITE_BADGE_CUSTOM_STYLE_DEFAULT_VALUE');

export const badgeDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_BADGE_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_BADGE_HAS_BORDER_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BADGE_SIZE_DEFAULT_VALUE,
    useValue: 'xs',
  },
  {
    provide: FLOWBITE_BADGE_IS_ICON_ONLY_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BADGE_IS_PILL_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BADGE_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  selector: 'flowbite-badge',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent extends BaseComponent<BadgeClass> {
  /**
   * Optional `FlowbiteRouterLinkDirective` injected
   */
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(BadgeThemeService);

  //#region properties
  /**
   * Set the badge color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_BADGE_COLOR_DEFAULT_VALUE));
  /**
   * Set if the badge has border
   */
  public hasBorder = model(inject(FLOWBITE_BADGE_HAS_BORDER_DEFAULT_VALUE));
  /**
   * Set the badge size
   *
   * @default xs
   */
  public size = model(inject(FLOWBITE_BADGE_SIZE_DEFAULT_VALUE));
  /**
   * Set if the badge is icon only
   *
   * @default false
   */
  public isIconOnly = model(inject(FLOWBITE_BADGE_IS_ICON_ONLY_DEFAULT_VALUE));
  /**
   * Set if the badge is pill
   *
   * @default false
   */
  public isPill = model(inject(FLOWBITE_BADGE_IS_PILL_DEFAULT_VALUE));
  /**
   * Set the custom style for this badge
   */
  public customStyle = model(inject(FLOWBITE_BADGE_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): BadgeClass {
    return this.themeService.getClasses({
      color: this.color(),
      hasBorder: booleanToFlowbiteBoolean(this.hasBorder()),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      link: this.flowbiteRouterLink?.routerLink.urlTree ?? null,
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
