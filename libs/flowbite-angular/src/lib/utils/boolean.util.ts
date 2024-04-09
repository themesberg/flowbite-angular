import { FlowbiteBoolean } from '../common/flowbite.theme';

export function booleanToFlowbiteBoolean(
  value: boolean,
): keyof FlowbiteBoolean {
  return value ? 'enabled' : 'disabled';
}

export function flowbiteBooleanToBoolean(
  value: keyof FlowbiteBoolean,
): boolean {
  return value === 'enabled';
}
