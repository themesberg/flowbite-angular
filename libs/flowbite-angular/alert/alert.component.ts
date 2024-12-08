import type { AlertClass, AlertColors, AlertTheme } from './alert.theme';
import { AlertThemeService } from './alert.theme.service';

import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import type { DeepPartial } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CLOSE_SVG_ICON } from 'flowbite-angular/utils';

import { NgTemplateOutlet } from '@angular/common';
import type { OnInit, TemplateRef } from '@angular/core';
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

export const FLOWBITE_ALERT_COLOR_DEFAULT_VALUE = new InjectionToken<keyof AlertColors>(
  'FLOWBITE_ALERT_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE'
);

export const FLOWBITE_ALERT_HAS_BORDER_ACCENT_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ALERT_HAS_BORDER_ACCENT_DEFAULT_VALUE'
);

export const FLOWBITE_ALERT_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<AlertTheme>
>('FLOWBITE_ALERT_CUSTOM_STYLE_DEFAULT8VALUE');

export const FLOWBITE_ALERT_ICON_DEFAULT_VALUE = new InjectionToken<TemplateRef<unknown> | null>(
  'FLOWBITE_ALERT_ICON_DEFAULT_VALUE'
);

export const FLOWBITE_ALERT_ADDITIONAL_CONTENT_DEFAULT_VALUE =
  new InjectionToken<TemplateRef<unknown> | null>(
    'FLOWBITE_ALERT_ADDITIONAL_CONTENT_DEFAULT_VALUE'
  );

export const FLOWBITE_ALERT_IS_DISMISSABLE_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_ALERT_IS_DISMISSABLE_DEFAULT_VALUE'
);

export const FLOWBITE_ALERT_ON_DISMISS_DEFAULT_VALUE = new InjectionToken<() => void | undefined>(
  'FLOWBITE_ALERT_ON_DISMISS_DEFAULT_VALUE'
);

export const alertDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_ALERT_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ALERT_HAS_BORDER_ACCENT_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ALERT_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
  {
    provide: FLOWBITE_ALERT_ICON_DEFAULT_VALUE,
    useValue: null,
  },
  {
    provide: FLOWBITE_ALERT_ADDITIONAL_CONTENT_DEFAULT_VALUE,
    useValue: null,
  },
  {
    provide: FLOWBITE_ALERT_IS_DISMISSABLE_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_ALERT_ON_DISMISS_DEFAULT_VALUE,
    useValue: undefined,
  },
]);

/**
 * @see https://flowbite.com/docs/components/alerts/
 */
@Component({
  standalone: true,
  imports: [NgTemplateOutlet, IconComponent],
  selector: 'flowbite-alert',
  template: `
    <div class="flex items-center">
      <ng-container [ngTemplateOutlet]="icon()"></ng-container>
      <div>
        <ng-content />
      </div>
      @if (isDismissable()) {
        <button
          type="button"
          [class]="contentClasses()!.closeButtonClass"
          aria-label="Close"
          (click)="onDismissClick()">
          <span class="sr-only">Close</span>
          <flowbite-icon
            svgIcon="flowbite-angular:close"
            class="h-5 w-5" />
        </button>
      }
    </div>
    <ng-container [ngTemplateOutlet]="additionalContent()"></ng-container>
  `,
  host: {
    '[attr.role]': 'alert',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent extends BaseComponent<AlertClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(AlertThemeService);
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
   * Set the indicator color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_ALERT_COLOR_DEFAULT_VALUE));
  /**
   * Set if the alert has border
   *
   * @default false
   */
  public hasBorder = model(inject(FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE));
  /**
   * Set if the alert has border accent
   *
   * @default false
   */
  public hasBorderAccent = model(inject(FLOWBITE_ALERT_HAS_BORDER_ACCENT_DEFAULT_VALUE));
  /**
   * Set the custom style for this alert
   */
  public customStyle = model(inject(FLOWBITE_ALERT_CUSTOM_STYLE_DEFAULT_VALUE));
  /**
   * Set the custom icon
   *
   * @default null
   */
  public icon = model(inject(FLOWBITE_ALERT_ICON_DEFAULT_VALUE));
  /**
   * Set the additional content
   *
   * @default null
   */
  public additionalContent = model(inject(FLOWBITE_ALERT_ADDITIONAL_CONTENT_DEFAULT_VALUE));
  /**
   * Set if the alert is dismissable
   *
   * @default false
   */
  public isDismissable = model(inject(FLOWBITE_ALERT_IS_DISMISSABLE_DEFAULT_VALUE));
  /**
   * Set the function called when the alert is dismissed
   *
   * @default undefined
   */
  public onDismiss = model(inject(FLOWBITE_ALERT_ON_DISMISS_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): AlertClass {
    return this.themeService.getClasses({
      color: this.color(),
      hasBorder: booleanToFlowbiteBoolean(this.hasBorder()),
      hasBorderAccent: booleanToFlowbiteBoolean(this.hasBorderAccent()),
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
