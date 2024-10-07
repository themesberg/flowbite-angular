import type { UrlTree } from '@angular/router';

/**
 * Type describing all the combinations possible between two types.
 */
export type Combination<T extends string | number | symbol, U extends string | number | symbol, TOut> = {
  [K1 in T]: {
    [K2 in U]: TOut;
  };
};

/**
 * Type describing RouterLink parameters.
 */
export type RouterLinkParameter = UrlTree | null;

/**
 * Type describing partial object from another, by getting every sub-child of provided type in itself.
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
