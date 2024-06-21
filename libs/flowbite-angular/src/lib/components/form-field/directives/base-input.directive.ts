import { FlowbiteClass } from '../../../common';
import { FormFieldState } from '../../../services/state/form-field.state';
import { SignalStoreService } from '../../../services';

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
  protected readonly injector = inject(Injector);
  protected readonly stateService = inject<SignalStoreService<FormFieldState>>(
    SignalStoreService<FormFieldState>,
  );

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
