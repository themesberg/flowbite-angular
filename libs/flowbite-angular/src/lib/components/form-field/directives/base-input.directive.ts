import type { FlowbiteClass } from '../../../common';
import { FormFieldComponent } from '../form-field.component';

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
  protected readonly formFieldComponent: FormFieldComponent = inject(FormFieldComponent);

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
