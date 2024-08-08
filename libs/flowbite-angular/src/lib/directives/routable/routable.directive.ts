import type { DeepPartial, FlowbiteLink } from '../../common';
import { FlowbiteLinkRouter } from '../../services';
import { BaseDirective } from '../base.directive';
import { RoutableDirectiveClassInstance } from './routable.directive.theme';
import type { RoutableDirectiveBaseTheme, RoutableDirectiveClass } from './routable.directive.theme';
import { RoutableDirectiveThemeService } from './routable.directive.theme.service';

import { Directive, HostListener, inject, input, signal } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[flowbiteRoutable]',
})
export class RoutableDirective extends BaseDirective {
  protected readonly themeService = inject(RoutableDirectiveThemeService);
  protected readonly flowbiteLinkRouter = inject(FlowbiteLinkRouter);

  protected override contentClasses = signal<RoutableDirectiveClass>(RoutableDirectiveClassInstance);

  public href = input<FlowbiteLink | undefined>(undefined);
  public customStyle = input<DeepPartial<RoutableDirectiveBaseTheme>>({});

  @HostListener('click')
  protected async onNavigate(): Promise<void> {
    await this.flowbiteLinkRouter.navigate(this.href());
  }

  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      href: this.href(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
}
