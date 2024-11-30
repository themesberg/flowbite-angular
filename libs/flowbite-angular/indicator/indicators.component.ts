import type {
  indicatorClass,
  IndicatorColors,
  IndicatorPositions,
  IndicatorSizes,
  IndicatorTheme,
} from './indicators.theme';
import { IndicatorThemeService } from './indicators.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_INDICATOR_IS_PILL_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_IS_PILL_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_IS_OUTLINE_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_IS_OUTLINE_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_IS_DISABLED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_IS_DISABLED_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_HAS_OFFSET_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_HAS_OFFSET_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_IS_ROUNDED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_IS_ROUNDED_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_HAS_BORDER_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_INDICATOR_HAS_BORDER_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_COLOR_DEFAULT_VALUE = new InjectionToken<keyof IndicatorColors>(
  'FLOWBITE_INDICATOR_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_SIZE_DEFAULT_VALUE = new InjectionToken<keyof IndicatorSizes>(
  'FLOWBITE_INDICATOR_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_INDICATOR_PLACEMENT_DEFAULT_VALUE = new InjectionToken<
  keyof IndicatorPositions | undefined
>('FLOBITE_INDICATOR_PLACEMENT_DEFAULT_VALUE');

export const FLOWBITE_INDICATOR_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<IndicatorTheme>
>('FLOWBITE_INDICATOR_CUSTOM_STYLE_DEFAULT_VALUE');

export const indicatorDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_INDICATOR_IS_PILL_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_IS_OUTLINE_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_IS_DISABLED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_HAS_OFFSET_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_IS_ROUNDED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_HAS_BORDER_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_INDICATOR_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_INDICATOR_SIZE_DEFAULT_VALUE,
    useValue: 'md',
  },
  {
    provide: FLOWBITE_INDICATOR_PLACEMENT_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_INDICATOR_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/indicators/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-indicator',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndicatorComponent extends BaseComponent<indicatorClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(IndicatorThemeService);

  //#region properties
  /**
   * Set if the indicator is pill
   *
   * @default false
   */
  public isPill = model(inject(FLOWBITE_INDICATOR_IS_PILL_DEFAULT_VALUE));
  /**
   * Set if the indicator is outline
   *
   * @default false
   */
  public isOutline = model(inject(FLOWBITE_INDICATOR_IS_OUTLINE_DEFAULT_VALUE));
  /**
   * Set if the indicator is disable
   *
   * @default false
   */
  public isDisabled = model(inject(FLOWBITE_INDICATOR_IS_DISABLED_DEFAULT_VALUE));
  /**
   * Set if the indicator has offset
   *
   * @default false
   */
  public hasOffset = model(inject(FLOWBITE_INDICATOR_HAS_OFFSET_DEFAULT_VALUE));
  /**
   * Set if the indicator is rounded
   *
   * @default false
   */
  public isRounded = model(inject(FLOWBITE_INDICATOR_IS_ROUNDED_DEFAULT_VALUE));
  /**
   * Set if the indicator has border
   *
   * @default false
   */
  public hasBorder = model(inject(FLOWBITE_INDICATOR_HAS_BORDER_DEFAULT_VALUE));
  /**
   * Set the indicator color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_INDICATOR_COLOR_DEFAULT_VALUE));
  /**
   * Set the indicator size
   *
   * @default md
   */
  public size = model(inject(FLOWBITE_INDICATOR_SIZE_DEFAULT_VALUE));
  /**
   * Set the indicator placement
   *
   * @default undefined
   */
  public placement = model(inject(FLOWBITE_INDICATOR_PLACEMENT_DEFAULT_VALUE));
  /**
   * Set the custom style for this indicator
   */
  public customStyle = model(inject(FLOWBITE_INDICATOR_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): indicatorClass {
    return this.themeService.getClasses({
      hasBorder: booleanToFlowbiteBoolean(this.hasBorder()),
      color: this.color(),
      isDisabled: booleanToFlowbiteBoolean(this.isDisabled()),
      hasOffset: booleanToFlowbiteBoolean(this.hasOffset()),
      isOutline: booleanToFlowbiteBoolean(this.isOutline()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      size: this.size(),
      placement: this.placement(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
