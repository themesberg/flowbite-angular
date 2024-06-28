export type Combination<T extends string | number | symbol, U extends string | number | symbol, TOut> = {
  [K1 in T]: {
    [K2 in U]: TOut;
  };
};

export type FlowbiteLink = string | any[] | null | undefined;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
