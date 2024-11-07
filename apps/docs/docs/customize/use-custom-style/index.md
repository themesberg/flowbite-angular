---
keyword: UseCustomStylePage
---

## Giving customStyle value

On each component call, you can give a <span class="docs highlight">customStyle</span> value.

```angular-html
<flowbite-alert [customStyle]='{ root: { base: 'bg-black' } }'>
    Hello World !
</flowbite-alert>
```

You can then pass TailwindCSS classes, following the component's base theme. If one or more keys are
not filled in the customStyle, then the base style from the component will be used.
