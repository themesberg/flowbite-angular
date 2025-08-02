---
keyword: UseCustomStylePage
---

## Giving customStyle value

On each component call, you can give a <span class="text-primary-500">customTheme</span> value.

```angular-html
<div flowbiteAlert [customTheme]='{ root: { base: 'bg-black' } }'>
    Hello World !
</div>
```

You can then pass TailwindCSS classes, following the component's base theme. If one or more keys are
not filled in the customStyle, then the base style from the component will be used.
