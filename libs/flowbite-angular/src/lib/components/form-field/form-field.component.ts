import {
  AddonDirective,
  HelperDirective,
  IconDirective,
  InputDirective,
  LabelDirective,
} from './directives';
import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Component, ContentChild, Input, OnDestroy } from '@angular/core';
import {
  FloatingLabelType,
  InputPrefixType,
  InputSize,
  InputType,
  InputValidation,
} from './form-field.properties';
import generateID from '../../utils/id.generator';

interface PropertyMap {
  type: InputType;
  floatingLabelType: FloatingLabelType | null;
  size: InputSize;
  disabled: boolean | string;
  validation: InputValidation | null;
  prefixType: InputPrefixType | null;
}

@Component({
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, NgTemplateOutlet],
  selector: 'flowbite-form-field',
  template: `
    <ng-container
      *ngIf="
        (_properties | async)?.floatingLabelType as floatingLabelType;
        else nonFloatingTemplate
      "
    >
      <div
        [ngClass]="{
          relative: floatingLabelType,
          'z-0': floatingLabelType === 'standard'
        }"
      >
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="labelTemplate"></ng-container>
      </div>
      <ng-container *ngTemplateOutlet="hintTemplate"></ng-container>
    </ng-container>
    <ng-template #nonFloatingTemplate>
      <ng-container *ngTemplateOutlet="labelTemplate"></ng-container>
      <ng-container
        *ngIf="
          (_properties | async)?.prefixType as prefixType;
          else inputTemplate
        "
      >
        <ng-container *ngIf="prefixType === 'icon'; else inputWithAddon">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <ng-container *ngTemplateOutlet="iconTemplate"></ng-container>
            </div>
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
          </div>
        </ng-container>
      </ng-container>
      <ng-container *ngTemplateOutlet="hintTemplate"></ng-container>
    </ng-template>

    <ng-template #inputWithAddon>
      <div class="flex">
        <ng-container *ngTemplateOutlet="addonTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      </div>
    </ng-template>

    <ng-template #inputTemplate>
      <ng-content select="input[flowbiteInput]"></ng-content>
    </ng-template>
    <ng-template #labelTemplate>
      <ng-content select="label[flowbiteLabel]"></ng-content>
    </ng-template>
    <ng-template #hintTemplate>
      <ng-content select="[flowbiteHelper]"></ng-content>
    </ng-template>
    <ng-template #iconTemplate>
      <ng-content select="[flowbiteIcon]"></ng-content>
    </ng-template>
    <ng-template #addonTemplate>
      <ng-content select="[flowbiteAddon][flowbiteAddon]"></ng-content>
    </ng-template>
  `,
})
export class FormFieldComponent implements OnDestroy {
  _inputId = generateID('flowbite-input');
  _properties = new BehaviorSubject<PropertyMap>({
    type: 'text',
    floatingLabelType: null,
    size: 'default',
    disabled: false,
    validation: null,
    prefixType: null,
  });

  @ContentChild(InputDirective) set input(content: InputDirective) {
    if (content) {
      this._properties.subscribe((value) =>
        Object.assign(content, { ...value, _id: this._inputId }),
      );
    }
  }
  @ContentChild(LabelDirective) set label(content: LabelDirective) {
    if (content) {
      this._properties.subscribe(({ floatingLabelType, validation }) =>
        Object.assign(content, {
          _id: generateID('flowbite-label'),
          parentId: this._inputId,
          floatingLabelType,
          validation,
        }),
      );
    }
  }
  @ContentChild(HelperDirective) set hint(content: HelperDirective) {
    if (content) {
      this._properties.subscribe(({ validation }) =>
        Object.assign(content, { validation }),
      );
    }
  }
  @ContentChild(AddonDirective) set addon(content: AddonDirective) {
    if (content) {
      this._properties.next({ ...this._properties.value, prefixType: 'addon' });
    }
  }
  @ContentChild(IconDirective) set icon(content: IconDirective) {
    if (content) {
      this._properties.next({ ...this._properties.value, prefixType: 'icon' });
    }
  }
  @Input() set type(type: InputType) {
    this._properties.next({ ...this._properties.value, type });
  }
  @Input() set floatingLabelType(floatingLabelType: FloatingLabelType | null) {
    this._properties.next({ ...this._properties.value, floatingLabelType });
  }
  @Input() set size(size: InputSize) {
    this._properties.next({ ...this._properties.value, size });
  }
  @Input() set disabled(disabled: boolean | string) {
    // hack because if you pass disabled instead of disabled=true
    // it will come as empty string value
    this._properties.next({
      ...this._properties.value,
      disabled: typeof disabled === 'boolean' ? disabled : true,
    });
  }
  @Input() set validation(validation: InputValidation | null) {
    this._properties.next({ ...this._properties.value, validation });
  }

  ngOnDestroy(): void {
    // Completing the BehaviorSubject such that we don't need to manually unsubscribe
    this._properties.complete();
  }
}
