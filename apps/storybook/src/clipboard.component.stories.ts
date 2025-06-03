import { defaultFlowbiteClipboardConfig, FlowbiteClipboard } from 'flowbite-angular/clipboard';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteClipboard;

export default {
  title: 'Component/Clipboard',
  component: FlowbiteClipboard,
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      table: {
        category: 'Input',
      },
    },
    value: {
      control: 'text',
      type: 'string',
      table: {
        category: 'Input',
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteClipboardConfig.customTheme),
        },
      },
    },
  },
  args: {
    id: 'clipboard',
    value: 'npm install flowbite-angular',
    customTheme: defaultFlowbiteClipboardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteClipboard ${argsToTemplate(args)}></div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
