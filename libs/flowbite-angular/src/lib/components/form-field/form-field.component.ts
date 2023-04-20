import { Component, ContentChild, Input, OnDestroy } from '@angular/core';
import {
  FloatingLabelType,
  InputSize,
  InputType,
  InputValidation,
} from './form-field.properties';
import generateID from '../../utils/id.generator';
import { HintDirective, InputDirective, LabelDirective } from './directives';
import { BehaviorSubject } from 'rxjs';

interface PropertyMap {
  _id: string;
  type: InputType;
  floatingLabelType: FloatingLabelType | null;
  size: InputSize;
  disabled: boolean | string;
  validation: InputValidation | null;
}

@Component({
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
      <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="hintTemplate"></ng-container>
    </ng-template>

    <ng-template #inputTemplate>
      <ng-content select="input[flowbiteInput]"></ng-content>
    </ng-template>
    <ng-template #labelTemplate>
      <ng-content select="label[flowbiteLabel]"></ng-content>
    </ng-template>
    <ng-template #hintTemplate>
      <ng-content select="[flowbiteHint]"></ng-content>
    </ng-template>
    <ng-template #errorTemplate>
      <ng-content select="[flowbiteError]"></ng-content>
    </ng-template>
  `,
})
export class FormFieldComponent implements OnDestroy {
  _properties = new BehaviorSubject<PropertyMap>({
    _id: generateID('flowbite-input'),
    type: 'text',
    floatingLabelType: null,
    size: 'default',
    disabled: false,
    validation: null,
  });

  @ContentChild(InputDirective) set input(content: InputDirective) {
    if (content) {
      this._properties.subscribe((value) => Object.assign(content, value));
    }
  }
  @ContentChild(LabelDirective) set label(content: LabelDirective) {
    if (content) {
      this._properties.subscribe((value) => Object.assign(content, value));
    }
  }
  @ContentChild(HintDirective) set hint(content: HintDirective) {
    if (content) {
      this._properties.subscribe(value => Object.assign(content, value));
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
    this._properties.next({ ...this._properties.value, disabled: typeof disabled === 'boolean' ? disabled : true });
  }
  @Input() set validation(validation: InputValidation | null) {
    this._properties.next({ ...this._properties.value, validation });
  }

  ngOnDestroy(): void {
    this._properties.complete();
  }
}
