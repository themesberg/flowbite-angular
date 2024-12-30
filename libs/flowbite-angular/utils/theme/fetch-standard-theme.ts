import type { StandardThemeConfiguration, StandardThemeInput } from 'flowbite-angular';

export function fetchStandardTheme(
  input: StandardThemeInput,
  theme: StandardThemeConfiguration
): string {
  let classes = theme.base.light;

  if (input.hasDark) {
    classes += ` ${theme.base.dark}`;
  }

  if (input.hasHover && theme.hover) {
    classes += ` ${theme.hover.light}`;

    if (input.hasDark) {
      classes += ` ${theme.hover.dark}`;
    }
  }

  if (input.hasFocus && theme.focus) {
    classes += ` ${theme.focus.light}`;

    if (input.hasDark) {
      classes += ` ${theme.focus.dark}`;
    }
  }

  if (input.hasDisabled && theme.disabled) {
    classes += ` ${theme.disabled.light}`;

    if (input.hasDark) {
      classes += ` ${theme.disabled.dark}`;
    }
  }

  return classes;
}
