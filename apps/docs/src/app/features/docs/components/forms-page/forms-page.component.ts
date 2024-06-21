import { BundledLanguage } from 'shiki/langs';
import {
  ButtonComponent,
  FormFieldComponent,
  HelperDirective,
  InputDirective,
  LabelDirective,
} from 'flowbite-angular';
import { Component } from '@angular/core';
import { DemoExampleComponent } from '../../../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../common/demo-page/demo-page.component';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    FormFieldComponent,
    ButtonComponent,
    LabelDirective,
    InputDirective,
    HelperDirective,
  ],
  selector: 'flowbite-forms-page',
  templateUrl: './form-page.component.html',
})
export class FormsPageComponent {
  examples = [
    {
      language: 'html' as BundledLanguage,
      code: `
<form>
  <div class="mb-6">
    <flowbite-form-field>
      <label flowbiteLabel>Your email</label>
      <input flowbiteInput placeholder="name@flowbite.com" />
    </flowbite-form-field>
  </div>
  <div class="mb-6">
    <flowbite-form-field type="password">
      <label flowbiteLabel>Your Password</label>
      <input flowbiteInput required />
    </flowbite-form-field>
  </div>
  <button>Submit</button>
</form>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<form>
  <div class="mb-6 w-full">
    <flowbite-form-field floatingLabelType="filled">
      <label flowbiteLabel>Email address</label>
      <input flowbiteInput />
    </flowbite-form-field>
  </div>
  <div class="mb-6 w-full">
    <flowbite-form-field floatingLabelType="filled" type="password">
      <label flowbiteLabel>Password</label>
      <input flowbiteInput />
    </flowbite-form-field>
  </div>
  <div class="mb-6 w-full">
    <flowbite-form-field floatingLabelType="filled" type="password">
      <label flowbiteLabel>Confirm password</label>
      <input flowbiteInput />
    </flowbite-form-field>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="mb-6 w-full">
      <flowbite-form-field floatingLabelType="filled">
        <label flowbiteLabel>First name</label>
        <input flowbiteInput />
      </flowbite-form-field>
    </div>
    <div class="mb-6 w-full">
      <flowbite-form-field floatingLabelType="filled">
        <label flowbiteLabel>Last name</label>
        <input flowbiteInput />
      </flowbite-form-field>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="mb-6 w-full">
      <flowbite-form-field floatingLabelType="filled">
        <label flowbiteLabel>Phone number (123-456-7890)</label>
        <input flowbiteInput />
      </flowbite-form-field>
    </div>
    <div class="mb-6 w-full">
      <flowbite-form-field floatingLabelType="filled">
        <label flowbiteLabel>Company (Ex. Google)</label>
        <input flowbiteInput />
      </flowbite-form-field>
    </div>
  </div>
  <flowbite-button>Submit</flowbite-button>
</form>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
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
</flowbite-form-field>`,
    },

    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-form-field disabled>
  <label flowbiteLabel>Disabled Input</label>
  <input flowbiteInput />
</flowbite-form-field>
<flowbite-form-field disabled>
  <label flowbiteLabel>Disabled readonly Input</label>
  <input flowbiteInput readonly />
</flowbite-form-field>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-form-field>
  <label flowbiteLabel>Your Email</label>
  <input flowbiteInput placeholder="name@flowbite.com" />
  <svg flowbiteIcon aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
</flowbite-form-field>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-form-field>
  <label flowbiteLabel>Your Email</label>
  <span flowbiteAddon>@</span>
  <input flowbiteInput placeholder="name@flowbite.com" />
</flowbite-form-field>
    `,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-form-field>
  <label flowbiteLabel>Your Email</label>
  <input flowbiteInput placeholder="name@flowbite.com" />
  <p flowbiteHelper>
    We’ll never share your details. Read our
    <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
  </p>
</flowbite-form-field>`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-form-field validation="success">
  <label flowbiteLabel>Success Input</label>
  <input flowbiteInput />
  <p class="text-sm" flowbiteHelper>
    <span class="font-medium">Well done!</span> Some success message.
  </p>
</flowbite-form-field>
<flowbite-form-field validation="error">
  <label flowbiteLabel>Error Input</label>
  <input flowbiteInput />
  <p flowbiteHelper>
    <span class="font-medium">Oh, snapp!</span> Some error message.
  </p>
</flowbite-form-field>`,
    },
  ];
}
