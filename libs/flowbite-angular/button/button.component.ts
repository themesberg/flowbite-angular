import type {
  ButtonClass,
  ButtonColors,
  ButtonDuoToneColors,
  ButtonFill,
  ButtonMonochromeColors,
  ButtonSizes,
  ButtonTheme,
} from './button.theme';
import { ButtonThemeService } from './button.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_BUTTON_COLOR_DEFAULT_VALUE = new InjectionToken<keyof ButtonColors>(
  'FLOWBITE_BUTTON_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_BUTTON_SIZE_DEFAULT_VALUE = new InjectionToken<keyof ButtonSizes>(
  'FLOWBITE_BUTTON_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_BUTTON_IS_PILL_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BUTTON_IS_PILL_DEFAULT_VALUE'
);

export const FLOWBITE_BUTTON_FILL_DEFAULT_VALUE = new InjectionToken<keyof ButtonFill>(
  'FLOWBITE_BUTTON_FILL_DEFAULT_VALUE'
);

export const FLOWBITE_BUTTON_IS_DISABLED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_BUTTON_IS_DISABLED_DEFAULT_VALUE'
);

export const FLOWBITE_BUTTON_GRADIENT_MONOCHROME_DEFAULT_VALUE = new InjectionToken<
  keyof ButtonMonochromeColors | undefined
>('FLOWBITE_BUTTON_GRADIENT_MONOCHROME_DEFAULT_VALUE');

export const FLOWBITE_BUTTON_GRADIENT_DUOTONE_DEFAULT_VALUE = new InjectionToken<
  keyof ButtonDuoToneColors | undefined
>('FLOWBITE_BUTTON_GRADIENT_DUOTONE_DEFAULT_VALUE');

export const FLOWBITE_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ButtonTheme>
>('FLOWBITE_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE');

export const buttonDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_BUTTON_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_BUTTON_SIZE_DEFAULT_VALUE,
    useValue: 'md',
  },
  {
    provide: FLOWBITE_BUTTON_IS_PILL_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BUTTON_FILL_DEFAULT_VALUE,
    useValue: 'solid',
  },
  {
    provide: FLOWBITE_BUTTON_IS_DISABLED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_BUTTON_GRADIENT_MONOCHROME_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_BUTTON_GRADIENT_DUOTONE_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/buttons/
 */
@Component({
  standalone: true,
  imports: [NgTemplateOutlet],
  selector: `
    flowbite-button,
    button[flowbite-button],
    a[flowbite-button]
  `,
  template: `
    @if (gradientDuoTone() && fill() === 'outline') {
      <span [class]="contentClasses().spanClass">
        <ng-content *ngTemplateOutlet="content" />
      </span>
    } @else {
      <ng-content *ngTemplateOutlet="content" />
    }

    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
  host: {
    type: 'button',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseComponent<ButtonClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ButtonThemeService);

  //#region properties
  /**
   * Set the button color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_BUTTON_COLOR_DEFAULT_VALUE));
  /**
   * Set the button size
   *
   * @default md
   */
  public size = model(inject(FLOWBITE_BUTTON_SIZE_DEFAULT_VALUE));
  /**
   * Set if the button is pill
   *
   * @default false
   */
  public isPill = model(inject(FLOWBITE_BUTTON_IS_PILL_DEFAULT_VALUE));
  /**
   * Set the button fill
   *
   * @default solid
   */
  public fill = model(inject(FLOWBITE_BUTTON_FILL_DEFAULT_VALUE));
  /**
   * Set if the button is disabled
   *
   * @default false
   */
  public isDisabled = model(inject(FLOWBITE_BUTTON_IS_DISABLED_DEFAULT_VALUE));
  /**
   * Set the button gradient monochrome
   *
   * @default undefined
   */
  public gradientMonochrome = model(inject(FLOWBITE_BUTTON_GRADIENT_MONOCHROME_DEFAULT_VALUE));
  /**
   * Set the button gradient duotone
   *
   * @default undefined
   */
  public gradientDuoTone = model(inject(FLOWBITE_BUTTON_GRADIENT_DUOTONE_DEFAULT_VALUE));
  /**
   * Set the custom style for this button
   */
  public customStyle = model(inject(FLOWBITE_BUTTON_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ButtonClass {
    return this.themeService.getClasses({
      color: this.color(),
      isDisabled: booleanToFlowbiteBoolean(this.isDisabled()),
      fill: this.fill(),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      size: this.size(),
      gradientMonochrome: this.gradientMonochrome(),
      gradientDuoTone: this.gradientDuoTone(),
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
