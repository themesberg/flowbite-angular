import type { FlowbiteBoolean } from '../common/flowbite.theme';

/**
 * This function cast a boolean to the internal flowbute-angular boolean type.
 *
 * @param value The input to be cast.
 * @returns enabled if value is true ; disabled if value is false.
 */
export function booleanToFlowbiteBoolean(value: boolean): keyof FlowbiteBoolean {
  return value ? 'enabled' : 'disabled';
}
