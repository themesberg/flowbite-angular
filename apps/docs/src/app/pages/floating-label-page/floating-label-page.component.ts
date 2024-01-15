import { Component } from '@angular/core';
import { DemoExampleComponent } from '../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../common/demo-page/demo-page.component';
import {
  FormFieldComponent,
  InputDirective,
  LabelDirective,
} from '@flowbite-angular/lib';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    FormFieldComponent,
    LabelDirective,
    InputDirective,
  ],
  selector: 'flowbite-floating-label-page',
  template: `
    <flowbite-demo-page>
      <flowbite-demo-example title="Floating Label Example">
        <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
          <flowbite-form-field floatingLabelType="filled">
            <label flowbiteLabel>Filled Floating Label</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined">
            <label flowbiteLabel>Outlined Floating Label</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard">
            <label flowbiteLabel>Standard Floating Label</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
        </div>
      </flowbite-demo-example>
      <flowbite-demo-example title="Floating Label - Disabled">
        <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
          <flowbite-form-field floatingLabelType="filled" disabled>
            <label flowbiteLabel>Disabled Filled</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined" disabled>
            <label flowbiteLabel>Disabled Outlined</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard" disabled>
            <label flowbiteLabel>Disabled Standard</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
        </div>
      </flowbite-demo-example>
      <flowbite-demo-example title="Floating Label - Validation">
        <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
          <flowbite-form-field floatingLabelType="filled" validation="success">
            <label flowbiteLabel>Filled Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHelper>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field
            floatingLabelType="outlined"
            validation="success"
          >
            <label flowbiteLabel>Outlined Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHelper>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field
            floatingLabelType="standard"
            validation="success"
          >
            <label flowbiteLabel>Standard Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHelper>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="filled" validation="error">
            <label flowbiteLabel>Filled Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHelper>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined" validation="error">
            <label flowbiteLabel>Outlined Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHelper>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard" validation="error">
            <label flowbiteLabel>Standard Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHelper>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
        </div>
      </flowbite-demo-example>
      <flowbite-demo-example title="Floating Label - Size">
        <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
          <flowbite-form-field floatingLabelType="filled" size="small">
            <label flowbiteLabel>Small Filled</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined" size="small">
            <label flowbiteLabel>Small Outlined</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard" size="small">
            <label flowbiteLabel>Small Standard</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="filled" size="default">
            <label flowbiteLabel>Default Filled</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined" size="default">
            <label flowbiteLabel>Default Outlined</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard" size="default">
            <label flowbiteLabel>Default Standard</label>
            <input flowbiteInput placeholder=" " />
          </flowbite-form-field>
        </div>
      </flowbite-demo-example>
      <flowbite-demo-example title="Helper Text">
        <flowbite-form-field floatingLabelType="filled">
          <label flowbiteLabel>Floating helper</label>
          <input flowbiteInput placeholder=" " />
          <p flowbiteHelper>
            Remember, contributions to this topic should follow our
            <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
              >Community Guidelines</a
            >.
          </p>
        </flowbite-form-field>
      </flowbite-demo-example>
    </flowbite-demo-page>
  `,
})
export class FloatingLabelPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <flowbite-form-field floatingLabelType="filled">
    <label flowbiteLabel>Filled Floating Label</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="outlined">
    <label flowbiteLabel>Outlined Floating Label</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="standard">
    <label flowbiteLabel>Standard Floating Label</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
</div>
    `,
    },
    {
      language: 'html',
      code: `
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <flowbite-form-field floatingLabelType="filled" disabled>
    <label flowbiteLabel>Disabled Filled</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="outlined" disabled>
    <label flowbiteLabel>Disabled Outlined</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="standard" disabled>
    <label flowbiteLabel>Disabled Standard</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
</div>
      `,
    },
    {
      language: 'html',
      code: `
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <flowbite-form-field floatingLabelType="filled" validation="success">
    <label flowbiteLabel>Filled Success</label>
    <input flowbiteInput placeholder=" " />
    <p class="text-sm" flowbiteHelper>
      <span class="font-medium">Well done!</span> Some success message.
    </p>
  </flowbite-form-field>
  <flowbite-form-field
    floatingLabelType="outlined"
    validation="success"
  >
    <label flowbiteLabel>Outlined Success</label>
    <input flowbiteInput placeholder=" " />
    <p class="text-sm" flowbiteHelper>
      <span class="font-medium">Well done!</span> Some success message.
    </p>
  </flowbite-form-field>
  <flowbite-form-field
    floatingLabelType="standard"
    validation="success"
  >
    <label flowbiteLabel>Standard Success</label>
    <input flowbiteInput placeholder=" " />
    <p class="text-sm" flowbiteHelper>
      <span class="font-medium">Well done!</span> Some success message.
    </p>
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="filled" validation="error">
    <label flowbiteLabel>Filled Error</label>
    <input flowbiteInput placeholder=" " />
    <p flowbiteHelper>
      <span class="font-medium">Oh, snapp!</span> Some error message.
    </p>
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="outlined" validation="error">
    <label flowbiteLabel>Outlined Error</label>
    <input flowbiteInput placeholder=" " />
    <p flowbiteHelper>
      <span class="font-medium">Oh, snapp!</span> Some error message.
    </p>
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="standard" validation="error">
    <label flowbiteLabel>Standard Error</label>
    <input flowbiteInput placeholder=" " />
    <p flowbiteHelper>
      <span class="font-medium">Oh, snapp!</span> Some error message.
    </p>
  </flowbite-form-field>
</div>
      `,
    },
    {
      language: 'html',
      code: `
<div class="mb-6 grid items-end gap-6 md:grid-cols-3">
  <flowbite-form-field floatingLabelType="filled" size="small">
    <label flowbiteLabel>Small Filled</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="outlined" size="small">
    <label flowbiteLabel>Small Outlined</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="standard" size="small">
    <label flowbiteLabel>Small Standard</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="filled" size="default">
    <label flowbiteLabel>Default Filled</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="outlined" size="default">
    <label flowbiteLabel>Default Outlined</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
  <flowbite-form-field floatingLabelType="standard" size="default">
    <label flowbiteLabel>Default Standard</label>
    <input flowbiteInput placeholder=" " />
  </flowbite-form-field>
</div>
      `,
    },
    {
      language: 'html',
      code: `
<flowbite-form-field floatingLabelType="filled">
  <label flowbiteLabel>Floating helper</label>
  <input flowbiteInput placeholder=" " />
  <p flowbiteHelper>
    Remember, contributions to this topic should follow our
    <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
      >Community Guidelines</a
    >.
  </p>
</flowbite-form-field>
      `,
    },
  ];
}
