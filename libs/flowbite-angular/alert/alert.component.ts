import type { AlertClass, AlertColors, AlertTheme } from './alert.theme';
import { AlertThemeService } from './alert.theme.service';

import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import type { DeepPartial } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CLOSE_SVG_ICON } from 'flowbite-angular/utils';

import { animate, style, transition, trigger } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import type { OnInit, TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
    '[@onDestroyAnimation]': '',
  },
  animations: [
    trigger('onDestroyAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
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
  public color = model<keyof AlertColors>('primary');
  /**
   * Set if the alert has border
   *
   * @default false
   */
  public hasBorder = model<boolean>(false);
  /**
   * Set if the alert has border accent
   *
   * @default false
   */
  public hasBorderAccent = model<boolean>(false);
  /**
   * Set the custom style for this alert
   */
  public customStyle = model<DeepPartial<AlertTheme>>({});
  /**
   * Set the custom icon
   *
   * @default null
   */
  public icon = model<TemplateRef<unknown> | null>(null);
  /**
   * Set the additional content
   *
   * @default null
   */
  public additionalContent = model<TemplateRef<unknown> | null>(null);
  /**
   * Set if the alert is dismissable
   *
   * @default false
   */
  public isDismissable = model<boolean>(false);
  /**
   * Set the function called when the alert is dismissed
   *
   * @default undefined
   */
  public onDismiss = model<() => void | undefined>();
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
