import { UPDATE_STORY_ARGS } from 'storybook/internal/core-events';
import type { StoryId } from 'storybook/internal/csf';
import { addons } from 'storybook/preview-api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateArgs = (storyId: StoryId, args: any) => {
  addons.getChannel().emit(UPDATE_STORY_ARGS, {
    storyId,
    updatedArgs: args,
  });
};

export const bindTwoWay = <T>(id: StoryId, prop: keyof T): ((value: T[keyof T]) => void) => {
  return (value: T[keyof T]) => updateArgs(id, { [prop]: value });
};

export function hiddenOutputActions(...outputs: string[]) {
  return outputs.reduce(
    (acc, output) => {
      acc[output] = {
        action: output,
        table: { disable: true },
      };
      return acc;
    },
    {} as Record<string, unknown>
  );
}
