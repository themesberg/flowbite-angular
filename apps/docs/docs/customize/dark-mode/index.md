---
keyword: DarkModePage
---

## Enable dark mode

All you need to do is add `Theme` as a `hostDirectives` in your `app.component.ts`.

```angular-ts
...
import { Theme } from 'flowbite-angular/theme-toggle';
...

@Component({
  ...
  hostDirectives: [Theme],
})
export class AppComponent {
  ...
}
```

The Tailwind configuration depends on the `type` of `Theme`. In `Theme`, you can change its
behavior.  
Here is an example configuration to make it rely on data attributes:

```angular-ts
provideFlowbiteThemeConfig({
  type: { type: 'attr', name: 'data-theme' },
}),
```

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

## Get or set theme manually

To access or update the application theme manually, inject `Theme` into your component and call one
of its helper functions.
