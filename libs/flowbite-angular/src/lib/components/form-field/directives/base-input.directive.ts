import type { FlowbiteClass } from '../../../common';
import { FormFieldStateService } from '../../../services/state/form-field.state';

import type { OnInit } from '@angular/core';
import { Directive, effect, inject, Injector, signal } from '@angular/core';

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[class]': 'contentClasses()?.rootClass' },
})
export abstract class BaseInputDirective implements OnInit {
  protected contentClasses = signal<FlowbiteClass>({ rootClass: '' });

  protected readonly injector = inject(Injector);
  protected readonly formFieldStateService: FormFieldStateService = inject(FormFieldStateService);

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
