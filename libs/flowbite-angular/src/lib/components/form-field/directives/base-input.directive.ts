import { FlowbiteClass } from '../../../common';

import {
  Directive,
  Injector,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[class]': 'contentClasses()?.rootClass' },
})
export abstract class BaseInputDirective implements OnInit {
  protected injector = inject(Injector);

  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  ngOnInit(): void {
    effect(
      () => {
        this.fetchClass();
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }

  abstract fetchClass(): void;
}
