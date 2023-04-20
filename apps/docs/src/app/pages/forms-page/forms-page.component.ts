import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-forms-page',
  template: `
    <flowbite-demo-page>
      <flowbite-demo-example title="Input Sizes">
        <flowbite-form-field size="large">
          <label flowbiteLabel>Large Input</label>
          <input flowbiteInput />
        </flowbite-form-field>
        <flowbite-form-field size="default">
          <label flowbiteLabel>Default Input</label>
          <input flowbiteInput />
        </flowbite-form-field>
        <flowbite-form-field size="small">
          <label flowbiteLabel>Small Input</label>
          <input flowbiteInput />
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example title="Disabled Inputs">
        <flowbite-form-field disabled>
          <label flowbiteLabel>Disabled Input</label>
          <input flowbiteInput />
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example title="Validation">
        <flowbite-form-field validation="success">
          <label flowbiteLabel>Success Input</label>
          <input flowbiteInput />
          <p class="text-sm" flowbiteHint>
            <span class="font-medium">Well done!</span> Some success message.
          </p>
        </flowbite-form-field>
        <flowbite-form-field validation="error">
          <label flowbiteLabel>Error Input</label>
          <input flowbiteInput />
          <p flowbiteHint>
            <span class="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example title="Floating Label">
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
      <flowbite-demo-example title="Floating Label - Validation">
        <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
          <flowbite-form-field floatingLabelType="filled" validation="success">
            <label flowbiteLabel>Filled Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHint>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field
            floatingLabelType="outlined"
            validation="success"
          >
            <label flowbiteLabel>Outlined Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHint>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field
            floatingLabelType="standard"
            validation="success"
          >
            <label flowbiteLabel>Standard Success</label>
            <input flowbiteInput placeholder=" " />
            <p class="text-sm" flowbiteHint>
              <span class="font-medium">Well done!</span> Some success message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="filled" validation="error">
            <label flowbiteLabel>Filled Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHint>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="outlined" validation="error">
            <label flowbiteLabel>Outlined Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHint>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
          <flowbite-form-field floatingLabelType="standard" validation="error">
            <label flowbiteLabel>Standard Error</label>
            <input flowbiteInput placeholder=" " />
            <p flowbiteHint>
              <span class="font-medium">Oh, snapp!</span> Some error message.
            </p>
          </flowbite-form-field>
        </div>
      </flowbite-demo-example>
    </flowbite-demo-page>
  `,
})
export class FormsPageComponent {}
