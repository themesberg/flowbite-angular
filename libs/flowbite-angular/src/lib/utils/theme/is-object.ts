/**
 * Check if the provided parameter is an object or not.
 *
 * @param item The unknown type parameter.
 * @returns true if it's an ibject ; false otherwise.
 */
export function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && item.constructor === Object;
}
