/*
 * Thanks to flowbite-react for this file
 * https://github.com/themesberg/flowbite-react/blob/main/packages/ui/src/tailwind.ts
 */

interface Content {
  /**
   * Path to `node_modules` where `flowbite-angular` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `flowbite-angular` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // js
   * const flowbiteAngular = require("flowbite-angular/tailwind");
   * // esm
   * import flowbiteAngular from "flowbite-angular/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     flowbiteAngular.content({ base: "../../" })
   *   ],
   * }
   * ```
   *
   * @default "./"
   */

  base?: string;
}

export function content({ base = './' }: Content) {
  const path = 'node_modules/flowbite-angular/esm*/**/*.mjs';

  return `${base}${path}`;
}
