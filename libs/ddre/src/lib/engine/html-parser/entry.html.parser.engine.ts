import type { DDREEngineInput } from '../../core/engine-input';
import { parseInputToArrayString } from './core.html.parser.engine';
import { stringArrayToString } from './utils.html.parser.engine';

/**
 * Convert a DDREEngineInput or an Array of DDREEngineInput to a formatted HTML string
 * @param input Input to convert into formatted HTML
 * @returns Formatted HTML
 */
export function getString(input: DDREEngineInput<unknown> | DDREEngineInput<unknown>[]): string {
  let output: string[] = [];

  if (Array.isArray(input)) {
    input.forEach((x) => output.push(getString(x)));
  } else {
    output = parseInputToArrayString(input);
  }

  return stringArrayToString(output);
}
