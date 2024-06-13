export type Combination<T extends string, U extends string> = {
  [K1 in T]: {
    [K2 in U]: string;
  };
};
