import { Icon } from 'flowbite-angular/icon';
import { barsFromLeft } from 'flowbite-angular/icon/outline/general';
import { cart } from 'flowbite-angular/icon/solid/e-commerce';
import { chartPie, drawSquare, inbox } from 'flowbite-angular/icon/solid/general';
import { users } from 'flowbite-angular/icon/solid/user';
import {
  defaultFlowbiteSidebarConfig,
  provideFlowbiteSidebarState,
  Sidebar,
  SidebarContent,
  SidebarItem,
  SidebarToggle,
} from 'flowbite-angular/sidebar';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Sidebar;

export default {
  title: 'Component/Sidebar',
  component: Sidebar,
  decorators: [
    moduleMetadata({
      providers: [
        provideFlowbiteSidebarState(),
        provideIcons({ chartPie, inbox, users, cart, drawSquare, barsFromLeft }),
      ],
      imports: [SidebarContent, SidebarToggle, SidebarItem, Icon],
    }),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.open),
        },
      },
    },
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    open: defaultFlowbiteSidebarConfig.open,
    color: defaultFlowbiteSidebarConfig.color,
    customTheme: defaultFlowbiteSidebarConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <aside flowbiteSidebar ${argsToTemplate(args)}>
        <div flowbiteSidebarContent>
          <li><a flowbiteSidebarItem><flowbite-icon name="chartPie" />Dashboard</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="drawSquare" />Kanban</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="inbox" />Inbox</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="users" />Users</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="cart" />Products</a></li>
          <li><a flowbiteSidebarItem>Sign In</a></li>
          <li><a flowbiteSidebarItem>Sign Up</a></li>
        </div>
      </aside>
      <div class="lg:ml-64">
        <button
          flowbiteSidebarToggle>
            <flowbite-icon
              name="barsFromLeft"
              class="size-10 stroke-2" />
          </button>

        <div class="p-4">
          <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
            @for (i of [0, 1]; track $index) {
              <div class="mb-4 grid grid-cols-3 gap-4">
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
              </div>
              <div
                class="mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"></path>
                  </svg>
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    `,
  }),
};
