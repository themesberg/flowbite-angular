import { defaultFlowbitePaginationConfig, FlowbitePagination } from 'flowbite-angular/pagination';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbitePagination & {
  page: number;
  pageCount: number;
  disabled: boolean;
};

export default {
  title: 'Component/Pagination',
  component: FlowbitePagination,
  argTypes: {
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
          summary: JSON.stringify(defaultFlowbitePaginationConfig.color),
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbitePaginationConfig.size),
        },
      },
    },
    page: {
      control: 'number',
      type: 'number',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(1),
        },
      },
    },
    pageCount: {
      control: 'number',
      type: 'number',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(10),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbitePaginationConfig.customTheme),
        },
      },
    },
  },
  args: {
    page: 1,
    pageCount: 10,
    color: defaultFlowbitePaginationConfig.color,
    size: defaultFlowbitePaginationConfig.size,
    customTheme: defaultFlowbitePaginationConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <nav flowbitePagination ${argsToTemplate(args)}></nav>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
