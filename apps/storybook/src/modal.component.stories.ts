import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import {
  defaultFlowbiteModalConfig,
  FlowbiteModalComponent,
  FlowbiteModalContentComponent,
  FlowbiteModalFooterComponent,
  FlowbiteModalHeaderComponent,
  FlowbiteModalOverlayComponent,
} from 'flowbite-angular/modal';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

type StoryType = FlowbiteModalComponent;

export default {
  title: 'Component/Modal',
  component: FlowbiteModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteModalContentComponent,
        FlowbiteModalFooterComponent,
        FlowbiteModalHeaderComponent,
        FlowbiteModalOverlayComponent,
        FlowbiteButtonComponent,
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
      <button flowbiteButton outline [ngpDialogTrigger]="dialog">Modal</button>

      <ng-template #dialog let-close="close">
        <div flowbiteModalOverlay>
          <div flowbiteModal ${argsToTemplate(args)}>
            <h3 flowbiteModalHeader>Title of the modal</h3>
            <div flowbiteModalContent>
              Content of the modal
            </div>
            <div flowbiteModalFooter>
              <button flowbiteButton (click)="close()">Cancel</button>
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
