/**
 * Type describing all the combinations possible between two types.
 */

export type Combination<
  T extends string | number | symbol,
  U extends string | number | symbol,
  TOut,
> = {
  [K1 in T]: {
    [K2 in U]: TOut;
  };
};
