import { Button } from 'flowbite-angular/button';
import { FormControl, FormField, Helper, Label } from 'flowbite-angular/form';
import {
  defaultFlowbiteModalConfig,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from 'flowbite-angular/modal';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

type StoryType = Modal;

export default {
  title: 'Component/Modal',
  component: Modal,
  decorators: [
    moduleMetadata({
      imports: [
        ModalContent,
        ModalFooter,
        ModalHeader,
        ModalOverlay,
        Button,
        NgpDialogTrigger,
        FormControl,
        FormField,
        Label,
        Helper,
        Button,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg', 'xl'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteModalConfig.size),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteModalConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    size: defaultFlowbiteModalConfig.size,
    customTheme: defaultFlowbiteModalConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpDialogTrigger]="dialog">Modal</button>

      <ng-template #dialog let-close="close">
        <div flowbiteModalOverlay>
          <div flowbiteModal ${argsToTemplate(args)}>
            <h3 flowbiteModalHeader>Terms of Service</h3>
            <div flowbiteModalContent>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            <div flowbiteModalFooter>
              <button flowbiteButton (click)="close()" color="info">I accept</button>
              <button flowbiteButton (click)="close()" color="default" outline>Decline</button>
            </div>
          </div>
        </div>
      </ng-template>
    `,
  }),
};

export const FormModalStory: StoryObj<StoryType> = {
  name: 'Modal with Form',
  args: {
    size: defaultFlowbiteModalConfig.size,
    customTheme: defaultFlowbiteModalConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpDialogTrigger]="dialog">Modal</button>

      <ng-template #dialog let-close="close">
        <div flowbiteModalOverlay>
          <div flowbiteModal ${argsToTemplate(args)}>
            <h3 flowbiteModalHeader>Sign in to our platform</h3>
            <form flowbiteModalContent class="max-w-sm mx-auto">
              <div flowbiteFormField ${argsToTemplate(args)}>
                <label flowbiteLabel for="email">Email address</label>
                <input flowbiteFormControl id="email" name="email" placeholder="email@flowbite-angular.com" />
                <p flowbiteHelper>
                  We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
                </p>
              </div>
              <div flowbiteFormField ${argsToTemplate(args)}>
                <label flowbiteLabel for="password">Password</label>
                <input flowbiteFormControl id="password" name="password" placeholder="•••••••••" />
              </div>
              <div class="flex justify-between">
                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button flowbiteButton color="info" type="submit" class="w-full">Submit</button>
            </form>
          </div>
        </div>
      </ng-template>
    `,
  }),
};
