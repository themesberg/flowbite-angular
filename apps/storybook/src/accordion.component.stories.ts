import {
  defaultFlowbiteAccordionConfig,
  FlowbiteAccordionComponent,
  FlowbiteAccordionItemComponent,
} from 'flowbite-angular/accordion';

import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteAccordionComponent & {
  type: string;
  disabled: boolean;
  collapsible: boolean;
};

export default {
  title: 'Component/Accordion',
  component: FlowbiteAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteAccordionItemComponent],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'light', 'blue', 'red', 'green', 'yellow'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.color),
        },
      },
    },
    flush: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.flush),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.customTheme),
        },
      },
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['single', 'multiple'],
      table: {
        category: 'Input',
        subcategory: 'NG-PRIMITIVES',
        defaultValue: {
          summary: 'single',
        },
      },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        subcategory: 'NG-PRIMITIVES',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    collapsible: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        subcategory: 'NG-PRIMITIVES',
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteAccordionConfig.color,
    flush: defaultFlowbiteAccordionConfig.flush,
    customTheme: defaultFlowbiteAccordionConfig.customTheme,
    type: 'single',
    disabled: false,
    collapsible: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbite-accordion ${argsToTemplate(args)}>
        <div flowbite-accordion-item title="Title 1" value="accordion-item-1">
          <p>Content 1</p>
        </div>
        <div flowbite-accordion-item title="Title 2" value="accordion-item-2">
          <p>Content 2</p>
        </div>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
