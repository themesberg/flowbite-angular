---
keyword: DarkModePage
---

## Enable dark mode

All you need to do is add `FlowbiteThemeDirective` as an `hostDirectives` in you `app.component.ts`.

```angular-ts
...
import { FlowbiteThemeDirective } from 'flowbite-angular/theme';
...

@Component({
  ...
  hostDirectives: [FlowbiteThemeDirective],
})
export class AppComponent {
  ...
}
```

If your TailwindCSS configuration is based on the one provided by flowbite-angular, then everything
will be setup. Otherwise, you have to update your TailwindCSS configuration like this :

```javascript
module.exports = {
  darkMode: 'class',
};
```

## Get or set theme manually

In order to access or to update the application theme manually, you simply have to inject
`FlowbiteThemeDirective` into your component and call one of the provided functions.
