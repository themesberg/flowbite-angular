import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-forms-page',
  template: `
    <flowbite-demo-page>
      <flowbite-demo-example title="Default form" [codes]="[examples[0]]">
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
          <div class="mb-6 flex items-start">
            <div class="flex h-5 items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
          <flowbite-button>Submit</flowbite-button>
        </form>
      </flowbite-demo-example>
      <flowbite-demo-example title="Floating labels" [codes]="[examples[1]]">
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
        </form>
      </flowbite-demo-example>
      <flowbite-demo-example title="Input Sizes" [codes]="[examples[2]]">
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
      <flowbite-demo-example title="Disabled Inputs" [codes]="[examples[3]]">
        <flowbite-form-field disabled>
          <label flowbiteLabel>Disabled Input</label>
          <input flowbiteInput />
        </flowbite-form-field>
        <flowbite-form-field disabled>
          <label flowbiteLabel>Disabled readonly Input</label>
          <input flowbiteInput readonly />
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example
        title="Input element with icon"
        [codes]="[examples[4]]"
      >
        <flowbite-form-field>
          <label flowbiteLabel>Your Email</label>
          <input flowbiteInput placeholder="name@flowbite.com" />
          <svg
            aria-hidden="true"
            flowbiteIcon
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            ></path>
            <path
              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            ></path>
          </svg>
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example
        title="Input element with addon"
        [codes]="[examples[5]]"
      >
        <flowbite-form-field>
          <label flowbiteLabel>Your Email</label>
          <span flowbiteAddon>@</span>
          <input flowbiteInput placeholder="name@flowbite.com" />
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example title="Helper text" [codes]="[examples[6]]">
        <flowbite-form-field>
          <label flowbiteLabel>Your Email</label>
          <input flowbiteInput placeholder="name@flowbite.com" />
          <p flowbiteHelper>
            We’ll never share your details. Read our
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Privacy Policy</a
            >.
          </p>
        </flowbite-form-field>
      </flowbite-demo-example>
      <flowbite-demo-example title="Form Validation" [codes]="[examples[7]]">
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
        </flowbite-form-field>
      </flowbite-demo-example>
    </flowbite-demo-page>
  `,
})
export class FormsPageComponent {
  examples = [
    {
      language: 'html',
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
      language: 'html',
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
      language: 'html',
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
      language: 'html',
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
      language: 'html',
      code: `
<flowbite-form-field>
  <label flowbiteLabel>Your Email</label>
  <input flowbiteInput placeholder="name@flowbite.com" />
  <svg flowbiteIcon aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
</flowbite-form-field>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-form-field>
  <label flowbiteLabel>Your Email</label>
  <span flowbiteAddon>@</span>
  <input flowbiteInput placeholder="name@flowbite.com" />
</flowbite-form-field>
    `,
    },
    {
      language: 'html',
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
      language: 'html',
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
