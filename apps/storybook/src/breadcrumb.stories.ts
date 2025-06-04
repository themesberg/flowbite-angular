import { FlowbiteBadge } from 'flowbite-angular/badge';
import {
  defaultFlowbiteBreadcrumbConfig,
  FlowbiteBreadcrumb,
  FlowbiteBreadcrumbContent,
  FlowbiteBreadcrumbItem,
} from 'flowbite-angular/breadcrumb';
import { FlowbiteButton } from 'flowbite-angular/button';
import { FlowbiteDropdown, FlowbiteDropdownItem } from 'flowbite-angular/dropdown';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { chevronRight } from 'flowbite-angular/icon/outline/arrows';
import { home } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { NgpMenuTrigger } from 'ng-primitives/menu';

type StoryType = FlowbiteBreadcrumb;

export default {
  title: 'Component/Breadcrumb',
  component: FlowbiteBreadcrumb,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ home, chevronRight })],
      imports: [
        FlowbiteBreadcrumbContent,
        FlowbiteBreadcrumbItem,
        FlowbiteIcon,
        FlowbiteBadge,
        FlowbiteButton,
        NgpMenuTrigger,
        FlowbiteDropdown,
        FlowbiteDropdownItem,
      ],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'primary', 'dark', 'blue', 'red', 'green', 'yellow'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBreadcrumbConfig.color),
        },
      },
    },
    solid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBreadcrumbConfig.solid),
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
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteBreadcrumbConfig.color,
    solid: defaultFlowbiteBreadcrumbConfig.solid,
    customTheme: defaultFlowbiteBreadcrumbConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <nav flowbiteBreadcrumb ${argsToTemplate(args)}>
        <ol flowbiteBreadcrumbContent>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="home" />
            <span>Home</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>Projects</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>Flowbite</span>
          </li>
        </ol>
      </nav>
    `,
  }),
};

export const SolidBreadcrumb: StoryObj<StoryType> = {
  name: 'Solid Breadcrumb',
  args: {
    color: defaultFlowbiteBreadcrumbConfig.color,
    solid: true,
    customTheme: defaultFlowbiteBreadcrumbConfig.customTheme,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <nav flowbiteBreadcrumb ${argsToTemplate(args)}>
        <ol flowbiteBreadcrumbContent>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="home" />
            <span>Home</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>Projects</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>Flowbite</span>
          </li>
        </ol>
      </nav>
    `,
  }),
};

export const HeaderBreadcrumb: StoryObj<StoryType> = {
  name: 'Header Breadcrumb',
  args: {
    color: 'dark',
    solid: true,
    customTheme: defaultFlowbiteBreadcrumbConfig.customTheme,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <nav flowbiteBreadcrumb ${argsToTemplate(args)}>
        <ol flowbiteBreadcrumbContent>
          <li flowbiteBreadcrumbItem>
            <span>flowbite-angular.com</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>develop</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" />
            <span>Issue #312</span>
          </li>
        </ol>
        <span flowbiteBadge size="xs" color="blue">
          <span>docs</span>
        </span>
        <button flowbiteButton [ngpMenuTrigger]="dropdownMenu" color="dark" size="xs">Fix #6597</button>

        <ng-template #dropdownMenu>
          <div flowbiteDropdown ${argsToTemplate(args)}>
            <li flowbiteDropdownItem>New branch</li>
            <li flowbiteDropdownItem>Rename</li>
            <li flowbiteDropdownItem>Delete</li>
          </div>
        </ng-template>
      </nav>
    `,
  }),
};
