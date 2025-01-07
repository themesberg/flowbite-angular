---
keyword: StandardConfigurationPage
---

## What is this ?

**flowbite-angular configuration standard** is a way to create standardized theme across all
components in the library. It provides a clean way to use `TailwindState` in the component's theming
configuration.

## How ?

Implementing this feature mean having some defined types used across components. Here they are :

```ts group="definedTypes" name="StandardThemeConfiguration"
type StandardThemeConfiguration = {
  base: {
    light: string;
    dark: string;
  };
  hover:
    | {
        light: string;
        dark: string;
      }
    | undefined;
  focus:
    | {
        light: string;
        dark: string;
      }
    | undefined;
  disabled:
    | {
        light: string;
        dark: string;
      }
    | undefined;
};
```

```ts group="definedTypes" name="StandardThemeInput"
type StandardThemeInput = {
  hasDark: boolean;
  hasHover: boolean;
  hasFocus: boolean;
  hasDisabled: boolean;
};
```

```ts group="definedTypes" name="Default input values"
const allTrueStandardThemeInput = {
  hasDark: true,
  hasHover: true,
  hasFocus: true,
  hasDisabled: true,
};

const allFalseStandardThemeInput = {
  hasDark: false,
  hasHover: false,
  hasFocus: false,
  hasDisabled: false,
};
```

---

The `StandardThemeConfiguration` type will provide a standardized way for theme to be defined, with
support for separate light and dark themes, as well as common `TailwindState`.

_**Here is a list of theme impacted by this type :**_

<ul class="list-disc list-inside font-bold">
  <li>Colors</li>
</ul>

The `StandardThemeInput` is used as an input of components to provide an API controling if we use
this or this `TailwindState` or not. This comes with the pair `allTrueStandardThemeInput` and
`allFalseStandardThemeInput` to provide a quick way to use all every or none of `TailwindState`.

## Where ?

{% import "../../shared/configuration-standard.md" as confStd %}

In every component's page of the documentation, you will see an indicator.

{{ confStd.implements() }}

{{ confStd.partial_implements() }}

{{ confStd.not_implements() }}
