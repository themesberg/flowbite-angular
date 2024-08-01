import type { Example } from './examples';

export const defaultModal: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button (click)="default_modal.open()">Default modal</flowbite-button>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #default_modal>
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400 items-start justify-end">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="default_modal.close()">I accept</flowbite-button>
    <flowbite-button (click)="default_modal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
];
export const sizeModal: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button (click)="sizeSmallModal.open()">Small</flowbite-button>
<flowbite-button (click)="sizeMediumModal.open()">Medium</flowbite-button>
<flowbite-button (click)="sizeLargeModal.open()">Large</flowbite-button>
<flowbite-button (click)="sizeExtraLargeModal.open()">Extra large</flowbite-button>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #sizeSmallModal size="sm">
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="sizeSmallModal.close()">I accept</flowbite-button>
    <flowbite-button (click)="sizeSmallModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #sizeMediumModal size="md">
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="sizeMediumModal.close()">I accept</flowbite-button>
    <flowbite-button (click)="sizeMediumModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #sizeLargeModal size="lg">
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="sizeLargeModal.close()">I accept</flowbite-button>
    <flowbite-button (click)="sizeLargeModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #sizeExtraLargeModal size="xl">
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="sizeExtraLargeModal.close()">I accept</flowbite-button>
    <flowbite-button (click)="sizeExtraLargeModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
];
export const dismissableModal: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button (click)="dismissableModal.open()">Open modal</flowbite-button>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #dismissableModal isDismissable>
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that could personally affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="dismissableModal.close()">I accept</flowbite-button>
    <flowbite-button (click)="dismissableModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
</flowbite-modal>
    `,
  },
];
export const formModal: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button (click)="formModal.open()">Open modal</flowbite-button>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #formModal dismissable>
  <flowbite-modal-header>Sign in to our platform</flowbite-modal-header>
  <flowbite-modal-body>
    <form class="space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
      </div>
      <div class="flex justify-between">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
      </div>
      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" (click)="formModal.close()">
        Login to your account
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?
        <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
      </div>
    </form>
  </flowbite-modal-body>
</flowbite-modal>
    `,
  },
];
export const positionedModal: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button (click)="positionedModal.open()">Open modal</flowbite-button>
    `,
  },
  {
    language: 'html',
    code: `
<flowbite-modal #positionedModal dismissable position="top-center">
  <flowbite-modal-header>Terms of Service</flowbite-modal-header>
  <flowbite-modal-body>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
      companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
      ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
      possible of high-risk data breaches that affect them.
    </p>
  </flowbite-modal-body>
  <flowbite-modal-footer>
    <flowbite-button (click)="positionedModal.close()">Close</flowbite-button>
    <flowbite-button (click)="positionedModal.close()" color="gray">I decline</flowbite-button>
  </flowbite-modal-footer>
  </flowbite-modal>
    `,
  },
];
