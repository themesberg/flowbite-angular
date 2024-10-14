import type { DeepPartial } from '../../common/flowbite.type';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { CLOSE_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { ButtonComponent } from '../button/button.component';
import { IconComponent, IconRegistry } from '../icon';
import type { AlertClass, AlertColors, AlertTheme } from './alert.theme';
import { AlertThemeService } from './alert.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit, TemplateRef } from '@angular/core';
import { booleanAttribute, Component, HostBinding, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet, IconComponent, ButtonComponent],
  selector: 'flowbite-alert',
  template: `
    <div class="flex items-center">
      <ng-container [ngTemplateOutlet]="icon()"></ng-container>
      <div>
        <ng-content />
      </div>
      <button
        type="button"
        [ngClass]="contentClasses()!.closeButtonClass"
        *ngIf="isDismissable()"
        aria-label="Close"
        (click)="onDismissClick()">
        <span class="sr-only">Close</span>
        <flowbite-icon
          svgIcon="flowbite-angular:close"
          class="h-5 w-5" />
      </button>
    </div>
    <ng-container [ngTemplateOutlet]="additionalContent()"></ng-container>
  `,
})
export class AlertComponent extends BaseComponent<AlertClass> implements OnInit {
  @HostBinding('attr.role') hostRoleValue = 'alert';

  public readonly themeService = inject(AlertThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public color = input<keyof AlertColors>('primary');
  public hasBorder = input<boolean, unknown>(false, { transform: booleanAttribute });
  public hasBorderAccent = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<AlertTheme>>({});
  public icon = input<TemplateRef<unknown> | null>(null);
  public additionalContent = input<TemplateRef<unknown> | null>(null);
  public isDismissable = input<boolean, unknown>(false, { transform: booleanAttribute });
  public onDismiss = input<() => void | undefined>();
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
      this.domSanitizer.bypassSecurityTrustHtml(CLOSE_SVG_ICON),
    );
  }
  //#endregion

  public onDismissClick() {
    const func = this.onDismiss();

    if (func) func();
  }
}
