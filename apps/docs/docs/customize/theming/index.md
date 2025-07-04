---
keyword: ThemingPage
---

You can use the theme directive from tailwind to define any style related classes, such as the color
palette, fonts, breakpoints, and more.

```css
@theme {
  /* Primary */
  --color-primary-50: #fff0f1;
  --color-primary-100: #ffe1e4;
  --color-primary-200: #ffc8cf;
  --color-primary-300: #ff9ba8;
  --color-primary-400: #ff637b;
  --color-primary-500: #ff2c51;
  --color-primary-600: #f6083b;
  --color-primary-700: #c3002f;
  --color-primary-800: #ae0331;
  --color-primary-900: #940732;
  --color-primary-950: #5b041e;
}
```

## Theme structure

Some of the more widely used <span class="docs highlight">theme</span> keys are
<span class="docs highlight">screens</span>, <span class="docs highlight">colors</span>, and
<span class="docs highlight">spacing</span> as one of the core utility classes.

You can read all of the `TailwindConfigurableKeys`.

### Colors

Use the <span class="docs highlight">colors</span> key to update the color palette.

```css
@theme {
  /* Primary */
  --color-primary-50: #fff0f1;
  --color-primary-100: #ffe1e4;
  --color-primary-200: #ffc8cf;
  --color-primary-300: #ff9ba8;
  --color-primary-400: #ff637b;
  --color-primary-500: #ff2c51;
  --color-primary-600: #f6083b;
  --color-primary-700: #c3002f;
  --color-primary-800: #ae0331;
  --color-primary-900: #940732;
  --color-primary-950: #5b041e;
}
```

### Fonts

You can change de default font used by tailwind.

```css
@font-face {
  font-family: roboto;
  src: url('../../fonts/roboto.ttf') format('truetype');
}

@theme {
  --default-font-family: 'roboto';
}
```

## Customizing the theme

By default, the configuration file will set the base utility classes from TailwindCSS. However, you
can customize them by using the extends object.

### Overriding

Alternatively, you can also completely override some settings.

For example, the following code will override <span class="docs highlight">blue color palette</span>
by your own.

```css
@theme {
  /* Blue */
  --color-blue-50: #ebf5ff;
  --color-blue-100: #e1effe;
  --color-blue-200: #c3ddfd;
  --color-blue-300: #a4cafe;
  --color-blue-400: #76a9fa;
  --color-blue-500: #3f83f8;
  --color-blue-600: #1c64f2;
  --color-blue-700: #1a56db;
  --color-blue-800: #1e429f;
  --color-blue-900: #233876;
}
```

Please read the official `TailwindThemingDocumentation` if you want a full overview of the theming
options.
