import type { FlowbiteColors } from '../core/flowbite.colors';

export function colorToTheme<TSet extends Partial<FlowbiteColors>>(
  set: TSet,
  key: keyof TSet
): string {
  return `${set[key]!.light} ${set[key]!.dark}`;
}
