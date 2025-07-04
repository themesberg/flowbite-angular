import { Badge } from 'flowbite-angular/badge';
import {
  Breadcrumb,
  BreadcrumbContent,
  BreadcrumbItem,
  defaultFlowbiteBreadcrumbConfig,
} from 'flowbite-angular/breadcrumb';
import { Button } from 'flowbite-angular/button';
import { Dropdown, DropdownItem } from 'flowbite-angular/dropdown';
import { Icon } from 'flowbite-angular/icon';
import { chevronRight } from 'flowbite-angular/icon/outline/arrows';
import { home } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { NgpMenuTrigger } from 'ng-primitives/menu';

type StoryType = Breadcrumb;

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ home, chevronRight })],
      imports: [
        BreadcrumbContent,
        BreadcrumbItem,
        Icon,
        Badge,
        Button,
        NgpMenuTrigger,
        Dropdown,
        DropdownItem,
      ],
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

export const DefaultStory: StoryObj<StoryType> = {
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
            <flowbite-icon name="home" class="size-4 stroke-2" />
            <span>Home</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>Projects</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>Flowbite</span>
          </li>
        </ol>
      </nav>
    `,
  }),
};

export const SolidBreadcrumbStory: StoryObj<StoryType> = {
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
            <flowbite-icon name="home" class="size-4 stroke-2" />
            <span>Home</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>Projects</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>Flowbite</span>
          </li>
        </ol>
      </nav>
    `,
  }),
};

export const HeaderBreadcrumbStory: StoryObj<StoryType> = {
  name: 'Header Breadcrumb',
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
            <span>flowbite-angular.com</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>develop</span>
          </li>
          <li flowbiteBreadcrumbItem>
            <flowbite-icon name="chevron-right" class="size-4 stroke-2" />
            <span>Issue #312</span>
          </li>
        </ol>
        <span flowbiteBadge color="info">
          <span>docs</span>
        </span>
        <button flowbiteButton [ngpMenuTrigger]="dropdownMenu" size="xs">Fix #6597</button>

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
