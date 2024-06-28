import type { FlowbiteBoolean } from '../common/flowbite.theme';

export function booleanToFlowbiteBoolean(value: boolean): keyof FlowbiteBoolean {
  return value ? 'enabled' : 'disabled';
}
