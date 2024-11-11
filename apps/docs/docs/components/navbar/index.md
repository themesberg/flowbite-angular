---
keyword: NavbarPage
---

## Default navbar

{{ NgDocActions.demo('flowbiteDefaultComponent', {container: false}) }}

```angular-html file="./_default.component.html" group="default" name="html"

```

```angular-ts file="./_default.component.ts"#L1-L5 group="default" name="typescript"

```

## Navbar with brand

Use this example to display a brand element inside the navbar by importing the
`NavbarBrandComponent` component.

{{ NgDocActions.demo('flowbiteBrandComponent', {container: false}) }}

```angular-html file="./_brand.component.html" group="brand" name="html"

```

```angular-ts file="./_brand.component.ts"#L1-L6 group="brand" name="typescript"

```

## Navbar with dropdown

Use this example to feature a dropdown menu when clicking on the settings dropdown inside the navbar
by importing the `DropdownComponent` and `DropdownItemComponent` components.

{{ NgDocActions.demo('flowbiteDropdownComponent', {container: false}) }}

```angular-html file="./_dropdown.component.html" group="dropdown" name="html"

```

```angular-ts file="./_dropdown.component.ts"#L1-L7 group="dropdown" name="typescript"

```

## Responsive navbar

On mobile device the navigation bar will be collapsed and you will be able to use the hamburger menu
to toggle the menu items by adding the `NavbarToggleComponent` component.

{{ NgDocActions.demo('flowbiteResponsiveComponent', {container: false}) }}

```angular-html file="./_responsive.component.html" group="responsive" name="html"

```

```angular-ts file="./_responsive.component.ts"#L1-L7 group="responsive" name="typescript"

```
