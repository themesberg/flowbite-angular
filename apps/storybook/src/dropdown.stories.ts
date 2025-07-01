import { FlowbiteButton } from 'flowbite-angular/button';
import {
  defaultFlowbiteDropdownConfig,
  FlowbiteDropdown,
  FlowbiteDropdownContent,
  FlowbiteDropdownItem,
} from 'flowbite-angular/dropdown';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { chevronRight } from 'flowbite-angular/icon/outline/arrows';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpMenuTrigger, NgpSubmenuTrigger } from 'ng-primitives/menu';

type StoryType = FlowbiteDropdown;

export default {
  title: 'Component/Dropdown',
  component: FlowbiteDropdown,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteDropdownContent,
        FlowbiteDropdownItem,
        NgpMenuTrigger,
        NgpSubmenuTrigger,
        FlowbiteButton,
        FlowbiteIcon,
      ],
      providers: [provideIcons({ chevronRight })],
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
          summary: JSON.stringify(defaultFlowbiteDropdownConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteDropdownConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteDropdownConfig.color,
    customTheme: defaultFlowbiteDropdownConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown button</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Dashboard</li>
            <li flowbiteDropdownItem>Settings</li>
            <li flowbiteDropdownItem>Earnings</li>
            <li flowbiteDropdownItem>Sign out</li>
          </ul>
        </div>
      </ng-template>
    `,
  }),
};

export const DropdownDivider: StoryObj<StoryType> = {
  name: 'Dropdown with divider',
  args: {
    color: defaultFlowbiteDropdownConfig.color,
    customTheme: defaultFlowbiteDropdownConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown button</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Dashboard</li>
            <li flowbiteDropdownItem>Settings</li>
            <li flowbiteDropdownItem>Earnings</li>
          </ul>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Separated link</li>
          </ul>
        </div>
      </ng-template>
    `,
  }),
};

export const DropdownHeader: StoryObj<StoryType> = {
  name: 'Dropdown with header',
  args: {
    color: defaultFlowbiteDropdownConfig.color,
    customTheme: defaultFlowbiteDropdownConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown button</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name&#64;flowbite.com</div>
          </div>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Dashboard</li>
            <li flowbiteDropdownItem>Settings</li>
            <li flowbiteDropdownItem>Earnings</li>
          </ul>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Sign out</li>
          </ul>
        </div>
      </ng-template>
    `,
  }),
};

export const MultiLevelDropdown: StoryObj<StoryType> = {
  name: 'Multi level Dropdown',
  args: {
    color: defaultFlowbiteDropdownConfig.color,
    customTheme: defaultFlowbiteDropdownConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown button</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name&#64;flowbite.com</div>
          </div>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Dashboard</li>
            <li flowbiteDropdownItem [ngpSubmenuTrigger]="subMenu">
              <span>Dropdown</span>
              <flowbite-icon name="chevronRight" />
            </li>
            <li flowbiteDropdownItem>Earnings</li>
          </ul>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Sign out</li>
          </ul>
        </div>
      </ng-template>
      <ng-template #subMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <ul flowbiteDropdownContent>
            <li flowbiteDropdownItem>Overview</li>
            <li flowbiteDropdownItem>My downloads</li>
            <li flowbiteDropdownItem>Billing</li>
            <li flowbiteDropdownItem>Rewards</li>
          </ul>
        </div>
      </ng-template>
    `,
  }),
};
