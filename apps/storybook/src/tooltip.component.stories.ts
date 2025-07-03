import { Button } from 'flowbite-angular/button';
import { defaultFlowbiteTooltipConfig, Tooltip } from 'flowbite-angular/tooltip';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpTooltipTrigger } from 'ng-primitives/tooltip';

type StoryType = Tooltip;

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
  decorators: [
    moduleMetadata({
      imports: [NgpTooltipTrigger, Button],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
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
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteTooltipConfig.color,
    customTheme: defaultFlowbiteTooltipConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div #container>
        <button flowbiteButton [ngpTooltipTrigger]="tooltip" [ngpTooltipTriggerContainer]="container">tooltip</button>

        <ng-template #tooltip>
          <div flowbiteTooltip ${argsToTemplate(args)}>Tooltip content</div>
        </ng-template>
      </div>
    `,
  }),
};
