import type { BadgeClass, BadgeColors, BadgeSizes, BadgeTheme } from './badge.theme';
import { BadgeThemeService } from './badge.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { CLOSE_SVG_ICON } from 'flowbite-angular/utils';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

export const FLOWBITE_BADGE_IS_DISMISSABLE_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BADGE_IS_DISMISSABLE_DEFAULT_VALUE'
);

export const FLOWBITE_BADGE_ON_DISMISS_DEFAULT_VALUE = new InjectionToken<(() => void) | undefined>(
  'FLOWBITE_BADGE_ON_DISMISS_DEFAULT_VALUE'
);

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
  {
    provide: FLOWBITE_BADGE_IS_DISMISSABLE_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BADGE_ON_DISMISS_DEFAULT_VALUE,
    useValue: undefined,
  },
]);

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-badge',
  template: `
    <ng-content />
    @if (isDismissable()) {
      <button
        type="button"
        [class]="contentClasses()!.closeButtonClass"
        aria-label="Close"
        (click)="onDismissClick()">
        <span class="sr-only">Close</span>
        <flowbite-icon
          svgIcon="flowbite-angular:close"
          class="h-3 w-3" />
      </button>
    }
  `,
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
  /**
   * `IcoRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the badge color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_BADGE_COLOR_DEFAULT_VALUE));
  /**
   * Set if the badge has border
   *
   * @default false
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
  /**
   * Set if the badge is dismissable
   *
   * @default false
   */
  public isDismissable = model(inject(FLOWBITE_BADGE_IS_DISMISSABLE_DEFAULT_VALUE));
  /**
   * Set the function called when the badge is dismissed
   *
   * @default undefined
   */
  public onDismiss = model(inject(FLOWBITE_BADGE_ON_DISMISS_DEFAULT_VALUE));
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

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'close',
      this.domSanitizer.bypassSecurityTrustHtml(CLOSE_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Call the onDismiss function if it's not undefined
   */
  public onDismissClick() {
    const func = this.onDismiss();

    if (func) func();
  }
}
