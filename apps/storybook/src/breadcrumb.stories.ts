import {
  defaultFlowbiteBreadcrumbConfig,
  FlowbiteBreadcrumbComponent,
  FlowbiteBreadcrumbItemComponent,
} from 'flowbite-angular/breadcrumb';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { home } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteBreadcrumbComponent;

export default {
  title: 'Component/Breadcrumb',
  component: FlowbiteBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ home })],
      imports: [FlowbiteBreadcrumbItemComponent, FlowbiteIconComponent],
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
      <nav flowbiteBreadcrumb ${argsToTemplate(args)}>
        <li flowbiteBreadcrumbItem>
          <flowbite-icon name="home" />
          Home
        </li>
        <li flowbiteBreadcrumbItem>Projects</li>
        <li flowbiteBreadcrumbItem>Flowbite</li>
      </nav>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
