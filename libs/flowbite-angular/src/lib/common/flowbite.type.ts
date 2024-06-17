import { NavigationExtras } from '@angular/router';

export type Combination<
  T extends string | number | symbol,
  U extends string | number | symbol,
  TOut,
> = {
  [K1 in T]: {
    [K2 in U]: TOut;
  };
};

export type FlowbiteLink =
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      commands: any[];
      extras?: NavigationExtras | undefined;
    }
  | string;
