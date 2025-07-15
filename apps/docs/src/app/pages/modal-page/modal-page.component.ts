import {
  ButtonComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from '@flowbite-angular/lib';
import { Component } from '@angular/core';
import { DemoExampleComponent } from '../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../common/demo-page/demo-page.component';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    ButtonComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
  ],
  selector: 'flowbite-modal-page',
  template: `
    <flowbite-demo-page>
      <flowbite-demo-example
        title="Default modal"
        codeClassName="dark:!bg-gray-900 divide-y"
        [codes]="[examples[0]]"
      >
        <flowbite-button (click)="modal.open()">Open modal</flowbite-button>
        <flowbite-modal #modal>
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p
              class="mb-2 text-gray-500 dark:text-gray-400 items-start justify-end"
            >
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="modal.close()">I accept</flowbite-button>
            <flowbite-button (click)="modal.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
      </flowbite-demo-example>
      <flowbite-demo-example
        title="Modal sizes"
        codeClassName="dark:!bg-gray-900 divide-y"
        [codes]="[examples[1]]"
      >
        <div class="flex flex-row gap-1">
          <flowbite-button (click)="modalSmall.open()">Small</flowbite-button>
          <flowbite-button (click)="modalMedium.open()">Medium</flowbite-button>
          <flowbite-button (click)="modalLarge.open()">Large</flowbite-button>
          <flowbite-button (click)="modalExtraLarge.open()"
            >Extra large</flowbite-button
          >
        </div>
        <flowbite-modal #modalSmall [size]="'sm'">
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="modalSmall.close()"
              >I accept</flowbite-button
            >
            <flowbite-button (click)="modalSmall.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
        <flowbite-modal #modalMedium [size]="'md'">
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="modalSmall.close()"
              >I accept</flowbite-button
            >
            <flowbite-button (click)="modalSmall.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
        <flowbite-modal #modalLarge [size]="'lg'">
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="modalSmall.close()"
              >I accept</flowbite-button
            >
            <flowbite-button (click)="modalSmall.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
        <flowbite-modal #modalExtraLarge [size]="'xl'">
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="modalSmall.close()"
              >I accept</flowbite-button
            >
            <flowbite-button (click)="modalSmall.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
      </flowbite-demo-example>
      <flowbite-demo-example
        [title]="'Dismissable Modal'"
        [codes]="[examples[2]]"
      >
        <flowbite-button (click)="dismissModal.open()"
          >Open modal</flowbite-button
        >
        <flowbite-modal #dismissModal [dismissable]="true">
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="dismissModal.close()"
              >I accept</flowbite-button
            >
            <flowbite-button (click)="dismissModal.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
      </flowbite-demo-example>
      <flowbite-demo-example
        [title]="'Modal with form'"
        [codes]="[examples[3]]"
      >
        <flowbite-button (click)="formModal.open()">Open modal</flowbite-button>
        <flowbite-modal #formModal [dismissable]="true">
          <flowbite-modal-header>Sign in to our platform</flowbite-modal-header>
          <flowbite-modal-body>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div class="flex justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
                <a
                  href="#"
                  class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >Lost Password?</a
                >
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                (click)="formModal.close()"
              >
                Login to your account
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <a
                  href="#"
                  class="text-blue-700 hover:underline dark:text-blue-500"
                  >Create account</a
                >
              </div>
            </form>
          </flowbite-modal-body>
        </flowbite-modal>
      </flowbite-demo-example>
      <flowbite-demo-example
        [title]="'Positioned Modal'"
        [codes]="[examples[4]]"
      >
        <button
          type="button"
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-700 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          (click)="positionModal.open()"
        >
          Open modal
        </button>
        <flowbite-modal
          #positionModal
          [dismissable]="true"
          [position]="'top-center'"
        >
          <flowbite-modal-header>Terms of Service</flowbite-modal-header>
          <flowbite-modal-body>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              affect them.
            </p>
          </flowbite-modal-body>
          <flowbite-modal-footer>
            <flowbite-button (click)="positionModal.close()"
              >Close</flowbite-button
            >
            <flowbite-button (click)="modal.close()" [color]="'gray'"
              >I decline</flowbite-button
            >
          </flowbite-modal-footer>
        </flowbite-modal>
      </flowbite-demo-example>
    </flowbite-demo-page>
  `,
})
export class ModalPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-button (click)="this.modal.open()">Open modal</flowbite-button>
<flowbite-modal #modal [dismissable]="true" [size]="'md'" [isOpen]="false">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modal.close()">I accept</flowbite-button>
        <flowbite-button (click)="modal.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
            `,
    },
    {
      language: 'html',
      code: `
<div class="flex flex-row gap-1">
    <flowbite-button (click)="this.modalSmall.open()">Small</flowbite-button>
    <flowbite-button (click)="this.modalMedium.open()">Medium</flowbite-button>
    <flowbite-button (click)="this.modalLarge.open()">Large</flowbite-button>
    <flowbite-button (click)="this.modalExtraLarge.open()">Extra large</flowbite-button>
</div>
<flowbite-modal #modalSmall [size]="'sm'">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modalSmall.close()">I accept</flowbite-button>
        <flowbite-button (click)="modalSmall.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
<flowbite-modal #modalMedium [dismissable]="true" [size]="'md'">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modalSmall.close()">I accept</flowbite-button>
        <flowbite-button (click)="modalSmall.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
<flowbite-modal #modalLarge [dismissable]="true" [size]="'lg'">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modalSmall.close()">I accept</flowbite-button>
        <flowbite-button (click)="modalSmall.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
<flowbite-modal #modalExtraLarge [size]="'xl'">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modalSmall.close()">I accept</flowbite-button>
        <flowbite-button (click)="modalSmall.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
            `,
    },
    {
      language: 'html',
      code: `
<flowbite-button (click)="modal.open()">Open modal</flowbite-button>
<flowbite-modal #modal [dismissable]="true">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modal.close()">I accept</flowbite-button>
        <flowbite-button (click)="modal.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
            `,
    },
    {
      language: 'html',
      code: `
<flowbite-button (click)="formModal.open()">Open modal</flowbite-button>
<flowbite-modal #formModal [dismissable]="true">
    <flowbite-modal-header>Sign in to our platform</flowbite-modal-header>
    <flowbite-modal-body>
        <form class="space-y-6" action="#">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div class="flex justify-between">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" (click)="formModal.close()">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
            </div>
        </form>
    </flowbite-modal-body>
</flowbite-modal>
            `,
    },
    {
      language: 'html',
      code: `
<flowbite-button (click)="modal.open()">Open modal</flowbite-button>
<flowbite-modal #modal position="'top-center'">
    <flowbite-modal-header>Terms of Service</flowbite-modal-header>
    <flowbite-modal-body>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
    </flowbite-modal-body>
    <flowbite-modal-footer>
        <flowbite-button (click)="modal.close()">I accept</flowbite-button>
        <flowbite-button (click)="modal.close()" [color]="'gray'">I decline</flowbite-button>
    </flowbite-modal-footer>
</flowbite-modal>
`,
    },
  ];
}
