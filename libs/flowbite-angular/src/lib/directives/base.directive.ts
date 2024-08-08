import type { FlowbiteClass } from '../common';

import type { OnInit } from '@angular/core';
import { Directive, effect, inject, Injector, signal } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[class]': 'contentClasses()?.rootClass' },
})
export abstract class BaseDirective implements OnInit {
  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  protected readonly injector = inject(Injector);

  public ngOnInit(): void {
    effect(
      () => {
        this.fetchClass();
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }

  protected abstract fetchClass(): void;
}
