import { FlowbiteButton } from 'flowbite-angular/button';
import {
  defaultFlowbiteModalConfig,
  FlowbiteModal,
  FlowbiteModalContent,
  FlowbiteModalFooter,
  FlowbiteModalHeader,
  FlowbiteModalOverlay,
} from 'flowbite-angular/modal';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

type StoryType = FlowbiteModal;

export default {
  title: 'Component/Modal',
  component: FlowbiteModal,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteModalContent,
        FlowbiteModalFooter,
        FlowbiteModalHeader,
        FlowbiteModalOverlay,
        FlowbiteButton,
        NgpDialogTrigger,
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
              <button flowbiteButton (click)="close()" color="light" outline>Decline</button>
            </div>
          </div>
        </div>
      </ng-template>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
