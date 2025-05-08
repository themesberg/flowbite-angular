import {
  defaultFlowbiteSkeletonConfig,
  FlowbiteSkeletonComponent,
} from 'flowbite-angular/skeleton';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteSkeletonComponent;

export default {
  title: 'Component/Skeleton',
  component: FlowbiteSkeletonComponent,
  argTypes: {
    count: {
      control: 'number',
      type: 'number',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSkeletonConfig.count),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSkeletonConfig.customTheme),
        },
      },
    },
  },
  args: {
    count: defaultFlowbiteSkeletonConfig.count,
    customTheme: defaultFlowbiteSkeletonConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<div flowbiteSkeleton ${argsToTemplate(args)}></div>`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
