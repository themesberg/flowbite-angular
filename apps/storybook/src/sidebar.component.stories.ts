import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { cart } from 'flowbite-angular/icon/solid/e-commerce';
import { chartPie, drawSquare, inbox } from 'flowbite-angular/icon/solid/general';
import { users } from 'flowbite-angular/icon/solid/user';
import {
  defaultFlowbiteSidebarConfig,
  FlowbiteSidebarComponent,
  FlowbiteSidebarContentComponent,
  FlowbiteSidebarItemComponent,
  FlowbiteSidebarToggleComponent,
} from 'flowbite-angular/sidebar';
import { FlowbiteSkeletonComponent } from 'flowbite-angular/skeleton';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteSidebarComponent;

export default {
  title: 'Component/Sidebar',
  component: FlowbiteSidebarComponent,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ chartPie, inbox, users, cart, drawSquare })],
      imports: [
        FlowbiteSidebarContentComponent,
        FlowbiteSidebarToggleComponent,
        FlowbiteSidebarItemComponent,
        FlowbiteSkeletonComponent,
        FlowbiteIconComponent,
      ],
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
      options: [
        'info',
        'failure',
        'success',
        'warning',
        'primary',
        'dark',
        'light',
        'blue',
        'cyan',
        'gray',
        'green',
        'indigo',
        'lime',
        'pink',
        'purple',
        'red',
        'teal',
        'yellow',
      ],
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
  args: {
    open: defaultFlowbiteSidebarConfig.open,
    color: defaultFlowbiteSidebarConfig.color,
    customTheme: defaultFlowbiteSidebarConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <aside flowbiteSidebar ${argsToTemplate(args)} #sidebar>
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
      <div class="md:ml-48">
        <button flowbiteSidebarToggle [sidebar]="sidebar"></button>

        <div flowbiteSkeleton></div>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
