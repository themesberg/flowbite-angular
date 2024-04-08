import * as properties from './form-field.theme';
import {
  AddonDirective,
  HelperDirective,
  IconDirective,
  InputDirective,
  LabelDirective,
} from './directives';
import {
  FormFieldFloatingLabelTypes,
  FormFieldSizes,
  FormFieldTypes,
  FormFieldValidations,
} from './form-field.theme';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import generateID from '../../utils/id.generator';

import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  booleanAttribute,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe, NgTemplateOutlet],
  selector: 'flowbite-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements OnDestroy {
  _inputId = generateID('flowbite-input');

  _properties = new BehaviorSubject<properties.FormFieldProperties>({
    type: 'text',
    floatingLabelType: undefined,
    size: 'md',
    disabled: 'disabled',
    validate: undefined,
    prefix: undefined,
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
      this._properties.subscribe(({ floatingLabelType, validate }) =>
        Object.assign(content, {
          _id: generateID('flowbite-label'),
          parentId: this._inputId,
          floatingLabelType,
          validate,
        }),
      );
    }
  }

  @ContentChild(HelperDirective) set hint(content: HelperDirective) {
    if (content) {
      this._properties.subscribe(({ validate }) =>
        Object.assign(content, { validate }),
      );
    }
  }

  @ContentChild(AddonDirective) set addon(content: AddonDirective) {
    if (content) {
      this._properties.next({ ...this._properties.value, prefix: 'addon' });
    }
  }

  @ContentChild(IconDirective) set icon(content: IconDirective) {
    if (content) {
      this._properties.next({ ...this._properties.value, prefix: 'icon' });
    }
  }

  @Input() set type(type: keyof FormFieldTypes) {
    this._properties.next({ ...this._properties.value, type });
  }
  @Input() set floatingLabelType(
    floatingLabelType: keyof FormFieldFloatingLabelTypes | undefined,
  ) {
    this._properties.next({ ...this._properties.value, floatingLabelType });
  }
  @Input() set size(size: keyof FormFieldSizes) {
    this._properties.next({ ...this._properties.value, size });
  }
  @Input({ transform: booleanAttribute }) set disabled(disabled: boolean) {
    // hack because if you pass disabled instead of disabled=true
    // it will come as empty string value
    this._properties.next({
      ...this._properties.value,
      disabled: booleanToFlowbiteBoolean(disabled),
    });
  }
  @Input() set validate(validate: keyof FormFieldValidations | undefined) {
    this._properties.next({ ...this._properties.value, validate });
  }

  ngOnDestroy(): void {
    // Completing the BehaviorSubject such that we don't need to manually unsubscribe
    this._properties.complete();
  }
}
