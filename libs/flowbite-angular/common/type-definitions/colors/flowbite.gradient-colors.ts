import type { FlowbiteColors } from './flowbite.colors';

/**
 * Base definition of gradient colors used in flowbite-angular.
 */
export interface FlowbiteGradientColors extends Omit<FlowbiteColors, 'warning'> {
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}
