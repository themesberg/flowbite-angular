---
title: Navbar Component
route: component
keyword: NavbarPage
---

{% import "../../shared/component-deprecated-usage.md" as cdu %}

{{ cdu.deprecated() }}

## Default navbar

{{ NgDocActions.demo('c_default', {container: false}) }}

```angular-html file="./component/_default.component.html" group="default" name="html"

```

```angular-ts file="./component/_default.component.ts"#L1-L5 group="default" name="typescript"

```

## Navbar with brand

Use this example to display a brand element inside the navbar by importing the
`NavbarBrandComponent` component.

{{ NgDocActions.demo('c_brand', {container: false}) }}

```angular-html file="./component/_brand.component.html" group="brand" name="html"

```

```angular-ts file="./component/_brand.component.ts"#L1-L6 group="brand" name="typescript"

```

## Navbar with dropdown

Use this example to feature a dropdown menu when clicking on the settings dropdown inside the navbar
by importing the `DropdownComponent` and `DropdownItemComponent` components.

{{ NgDocActions.demo('c_dropdown', {container: false}) }}

```angular-html file="./component/_dropdown.component.html" group="dropdown" name="html"

```

```angular-ts file="./component/_dropdown.component.ts"#L1-L7 group="dropdown" name="typescript"

```

## Responsive navbar

On mobile device the navigation bar will be collapsed and you will be able to use the hamburger menu
to toggle the menu items by adding the `NavbarToggleComponent` component.

{{ NgDocActions.demo('c_responsive', {container: false}) }}

```angular-html file="./component/_responsive.component.html" group="responsive" name="html"

```

```angular-ts file="./component/_responsive.component.ts"#L1-L7 group="responsive" name="typescript"

```
