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
  templateUrl: './form-field.component.html',
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
