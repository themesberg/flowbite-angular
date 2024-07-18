import type { DDREEngineInput } from '../../core/engine-input';

import { reflectComponentType } from '@angular/core';

/**
 * Convert DDREEngineInput into a string Array as formatted HTML
 * @param input Input to convert into formatted HTML
 * @param indentation current indentation (default: 0)
 * @returns An string Array as formatted HTML
 */
export function parseInputToArrayString(input: DDREEngineInput<unknown>, indentation: number = 0): string[] {
  const indentChar: string = ' ';
  const indentSize: number = 2 + indentation;
  const output: string[] = [];

  if (typeof input === 'string') {
    output.push(`${indentChar.repeat(indentSize)}${input}`);
  } else if (typeof input.content === 'string') {
    output.push(`${indentChar.repeat(indentSize)}${input.content}`);
  } else {
    const currentComponent = reflectComponentType(input.component);
    const attributeContext = input.context ? ` ${input.context.join(' ')}` : '';

    output.push(`${indentChar.repeat(indentSize)}<${currentComponent?.selector}${attributeContext}>`);

    if (Array.isArray(input.content)) {
      input.content.forEach((x) => output.push(...parseInputToArrayString(x, indentSize)));
    } else {
      output.push(...parseInputToArrayString(input.content, indentSize));
    }

    output.push(`${indentChar.repeat(indentSize)}</${currentComponent?.selector}>`);
  }

  return output;
}
