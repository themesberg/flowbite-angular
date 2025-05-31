import { isObject } from './is-object';

/**
 * Function that return the cloned type of the provided generic type.
 *
 * @param source Generic object to be cloned.
 * @returns The clone type of the provided type.
 */
export function cloneDeep<T>(source: T): T {
  if (!isObject(source)) {
    return source;
  }

  const output: Record<string, unknown> = {};

  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }

  return output as T;
}
