import { bindTwoWay, hiddenOutputActions } from '../.storybook/helper';

import { defaultFlowbitePaginationConfig, Pagination } from 'flowbite-angular/pagination';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = Pagination & {
  page: number;
  pageCount: number;
  disabled: boolean;
};

export default {
  title: 'Component/Pagination',
  component: Pagination,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
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
    ...hiddenOutputActions('pageChange'),
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    page: 1,
    pageCount: 10,
    color: defaultFlowbitePaginationConfig.color,
    size: defaultFlowbitePaginationConfig.size,
    customTheme: defaultFlowbitePaginationConfig.customTheme,
  },
  render: (args, { id }) => ({
    props: {
      ...args,
      pageChange: bindTwoWay(id, 'page'),
    },
    template: `
      <nav flowbitePagination ${argsToTemplate(args)}></nav>
    `,
  }),
};
