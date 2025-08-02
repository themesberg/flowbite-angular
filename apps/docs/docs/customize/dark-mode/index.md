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

The configuration needed for tailwind will depend on the type value of `Theme`. In `Theme`, you are
able to change its behavior. Here is an example of configuration to make it use data-attributes :

```angular-ts
provideFlowbiteThemeConfig({
  type: { type: 'attr', name: 'data-theme' },
}),
```

```css
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

## Get or set theme manually

In order to access or to update the application theme manually, you simply have to inject `Theme`
into your component and call one of the provided functions.
