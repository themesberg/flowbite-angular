---
title: Navbar Directive
keyword: NavbarDirectivePage
---

## Default navbar

{{ NgDocActions.demo('d_default', {container: false}) }}

```angular-html file="./directive/_default.component.html" group="default" name="html"

```

```angular-ts file="./directive/_default.component.ts"#L1-L5 group="default" name="typescript"

```

## Navbar with brand

Use this example to display a brand element inside the navbar by importing the
`NavbarBrandComponent` component.

{{ NgDocActions.demo('d_brand', {container: false}) }}

```angular-html file="./directive/_brand.component.html" group="brand" name="html"

```

```angular-ts file="./directive/_brand.component.ts"#L1-L6 group="brand" name="typescript"

```

## Navbar with dropdown

Use this example to feature a dropdown menu when clicking on the settings dropdown inside the navbar
by importing the `DropdownComponent` and `DropdownItemComponent` components.

{{ NgDocActions.demo('d_dropdown', {container: false}) }}

```angular-html file="./directive/_dropdown.component.html" group="dropdown" name="html"

```

```angular-ts file="./directive/_dropdown.component.ts"#L1-L7 group="dropdown" name="typescript"

```

## Responsive navbar

On mobile device the navigation bar will be collapsed and you will be able to use the hamburger menu
to toggle the menu items by adding the `NavbarToggleComponent` component.

{{ NgDocActions.demo('d_responsive', {container: false}) }}

```angular-html file="./directive/_responsive.component.html" group="responsive" name="html"

```

```angular-ts file="./directive/_responsive.component.ts"#L1-L7 group="responsive" name="typescript"

```
