import {
  defaultFlowbiteBreadcrumbConfig,
  FlowbiteBreadcrumbComponent,
  FlowbiteBreadcrumbItemComponent,
} from 'flowbite-angular/breadcrumb';

import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteBreadcrumbComponent;

export default {
  title: 'Component/Breadcrumb',
  component: FlowbiteBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteBreadcrumbItemComponent],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBreadcrumbConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBreadcrumbConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteBreadcrumbConfig.color,
    customTheme: defaultFlowbiteBreadcrumbConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <nav flowbite-breadcrumb ${argsToTemplate(args)}>
        <li flowbite-breadcrumb-item>Home</li>
        <li flowbite-breadcrumb-item>Projects</li>
        <li flowbite-breadcrumb-item>Flowbite</li>
      </nav>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
