import * as properties from './modal.theme';

import { BaseComponent } from '../base.component';
import { ModalState } from '../../services/state/modal.state';
import { SignalStoreService } from '../../services/signal-store.service';

import {
  AfterViewInit,
  Component,
  HostBinding,
  HostListener,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { ModalThemeService } from './modal.theme.service';
import { NgClass } from '@angular/common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal',
  templateUrl: './modal.component.html',
  providers: [SignalStoreService<ModalState>],
})
export class ModalComponent extends BaseComponent implements AfterViewInit {
  @HostBinding('tabindex') protected tabIndex = '-1';

  protected themeService = inject(ModalThemeService);
  protected signalStoreService = inject<SignalStoreService<ModalState>>(
    SignalStoreService<ModalState>,
  );

  protected override contentClasses = signal<properties.ModalClass>(
    properties.ModalClassInstance,
  );

  //#region properties
  public size = input<keyof properties.ModalSizes>('md');
  public position = input<keyof properties.ModalPositions>('center');
  public isDismissable = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<Partial<properties.ModalBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(
        this.signalStoreService.select('isOpen')(),
      ),
      size: this.size(),
      position: this.position(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public ngAfterViewInit(): void {
    afterNextRender(
      () => {
        this.signalStoreService.set('isOpen', this.isOpen());
      },
      { injector: this.injector },
    );
  }

  open() {
    this.signalStoreService.set('isOpen', true);
    this.changeBackdrop();
  }

  close() {
    this.signalStoreService.set('isOpen', false);
    this.changeBackdrop();
  }

  toggle() {
    this.signalStoreService.set(
      'isOpen',
      this.signalStoreService.select('isOpen')(),
    );
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove backdrop
  changeBackdrop() {
    if (this.signalStoreService.select('isOpen')()) {
      const blurDiv = document.createElement('div');
      blurDiv.classList.add(
        'bg-gray-900',
        'bg-opacity-50',
        'dark:bg-opacity-80',
        'fixed',
        'inset-0',
        'z-40',
      );
      blurDiv.id = 'blurDiv';
      document.body.appendChild(blurDiv);
    } else {
      const blurDiv = document.getElementById('blurDiv');
      if (blurDiv) {
        document.body.removeChild(blurDiv);
      }
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent,
  ) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  @HostListener('click', ['$event'])
  onBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget && this.isDismissable()) {
      this.close();
    }
  }
}
