import type { DDREEngineInput } from '../../core/engine-input';
import { InvalidInputError } from '../../core/errors/invalid-input.error';

import { reflectComponentType } from '@angular/core';

/**
 * Convert DDREEngineInput into a string Array as formatted HTML
 * @param input Input to convert into formatted HTML
 * @param indentation current indentation (default: 0)
 * @returns An string Array as formatted HTML
 */
export function parseInputToArrayString(input: DDREEngineInput<unknown>, indentation: number = 0): string[] {
  const indentChar: string = ' ';
  const output: string[] = [];

  if (typeof input === 'string') {
    output.push(`${indentChar.repeat(indentation)}${input}`);
  } else {
    const currentComponent = reflectComponentType(input.component);

    const attributeContext = input.context && input.context.length > 0 ? ` ${input.context.join(' ')}` : '';

    if (!currentComponent) throw new InvalidInputError('component', 'reflectComponentType returned an undefined value');

    output.push(`${indentChar.repeat(indentation)}<${currentComponent.selector}${attributeContext}>`);

    if (Array.isArray(input.content)) {
      input.content.forEach((x) => output.push(...parseInputToArrayString(x, indentation + 2)));
    } else {
      output.push(...parseInputToArrayString(input.content, indentation + 2));
    }

    output.push(`${indentChar.repeat(indentation)}</${currentComponent.selector}>`);
  }

  return output;
}
