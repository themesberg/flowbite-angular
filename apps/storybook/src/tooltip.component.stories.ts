import { FlowbiteButton } from 'flowbite-angular/button';
import { defaultFlowbiteTooltipConfig, FlowbiteTooltip } from 'flowbite-angular/tooltip';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpTooltipTrigger } from 'ng-primitives/tooltip';

type StoryType = FlowbiteTooltip;

export default {
  title: 'Component/Tooltip',
  component: FlowbiteTooltip,
  decorators: [
    moduleMetadata({
      imports: [NgpTooltipTrigger, FlowbiteButton],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['light', 'dark'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTooltipConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTooltipConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteTooltipConfig.color,
    customTheme: defaultFlowbiteTooltipConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpTooltipTrigger]="tooltip">tooltip</button>

      <ng-template #tooltip>
        <div flowbiteTooltip ${argsToTemplate(args)}>Tooltip content</div>
      </ng-template>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
