/**
 * Type describing partial object from another, by getting every sub-child of provided type in itself.
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
