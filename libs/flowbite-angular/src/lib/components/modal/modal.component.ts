import * as properties from './modal.theme';

import { BaseComponent } from '../base.component';
import { ModalStateService } from '../../services/state/modal.state';

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
import { DeepPartial } from '../../common';
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
  providers: [
    {
      provide: ModalStateService,
      useFactory: () => {
        const service = inject(ModalStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new ModalStateService();
      },
    },
  ],
})
export class ModalComponent extends BaseComponent implements AfterViewInit {
  @HostBinding('tabindex') protected tabIndex = '-1';

  protected override contentClasses = signal<properties.ModalClass>(
    properties.ModalClassInstance,
  );

  protected readonly themeService = inject(ModalThemeService);
  protected readonly modalStateService: ModalStateService =
    inject(ModalStateService);

  //#region properties
  public size = input<keyof properties.ModalSizes>('md');
  public position = input<keyof properties.ModalPositions>('center');
  public isDismissable = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.ModalBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(
        this.modalStateService.select('isOpen')(),
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
        this.modalStateService.set('isOpen', this.isOpen());
      },
      { injector: this.injector },
    );
  }

  open() {
    this.modalStateService.set('isOpen', true);
    this.changeBackdrop();
  }

  close() {
    this.modalStateService.set('isOpen', false);
    this.changeBackdrop();
  }

  toggle() {
    this.modalStateService.set(
      'isOpen',
      this.modalStateService.select('isOpen')(),
    );
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove backdrop
  changeBackdrop() {
    if (this.modalStateService.select('isOpen')()) {
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
