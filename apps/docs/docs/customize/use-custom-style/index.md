---
keyword: UseCustomStylePage
---

## Giving customStyle value

On each component call, you can give a <span class="docs highlight">customStyle</span> value.

```angular-html
<div flowbiteAlert [customStyle]='{ root: { base: 'bg-black' } }'>
    Hello World !
</div>
```

You can then pass TailwindCSS classes, following the component's base theme. If one or more keys are
not filled in the customStyle, then the base style from the component will be used.
