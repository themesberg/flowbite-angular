import { defaultFlowbiteCardConfig, FlowbiteCard, FlowbiteCardHeader } from 'flowbite-angular/card';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteCard;

export default {
  title: 'Component/Card',
  component: FlowbiteCard,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteCardHeader],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['gray'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteCardConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteCardConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteCardConfig.color,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
        <div class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</div>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
