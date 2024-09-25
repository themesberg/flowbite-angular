---
---

---

You can use the theme object from the configuration file to define any style related classes, such as the color palette, fonts, breakpoints, and more.

```typescript
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#FFF0F1',
        100: '#FFE1E4',
        200: '#FFC8CF',
        300: '#FF9BA8',
        400: '#FF637B',
        500: '#FF2C51',
        600: '#F6083B',
        700: '#C3002F',
        800: '#AE0331',
        900: '#940732',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: 'Inter',
    },
  },
};
```

## Theme structure

Some of the more widely used <span class="docs highlight">theme</span> keys are <span class="docs highlight">screens</span>, <span class="docs highlight">colors</span>, and <span class="docs highlight">spacing</span> as one of the core utility classes.

You can read all of the `TailwindConfigurableKeys`.

### Breakpoints

Use the <span class="docs highlight">screens</span> key to update the responsive breakpoints.

```typescript
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
};
```

### Colors

Use the <span class="docs highlight">colors</span> key to update the responsive breakpoints.

```typescript
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#FFF0F1',
        100: '#FFE1E4',
        200: '#FFC8CF',
        300: '#FF9BA8',
        400: '#FF637B',
        500: '#FF2C51',
        600: '#F6083B',
        700: '#C3002F',
        800: '#AE0331',
        900: '#940732',
      },
    },
  },
};
```

### Fonts

Use the <span class="docs highlight">colors</span> key to update the responsive breakpoints.

```typescript
module.exports = {
  theme: {
    fontFamily: {
      sans: 'Inter',
    },
  },
};
```

### Spacing

Use the <span class="docs highlight">spacing</span> key to update the responsive breakpoints.

```typescript
module.exports = {
  theme: {
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
};
```

## Customizing the theme

By default, the configuration file will set the base utility classes from TailwindCSS. However, you can customize them by using the extends object.

### Extending

Use the <span class="docs highlight">extends</span> object if you want to keep the values from the default settings but you want to extend them with your own.

For example, you can keep all of the default breakpoints, but you may want to add another larger one for the screens key.

```typescript
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
};
```

### Overriding

Alternatively, you can also completely override certain settings.

For example, the following code will override all of the <span class="docs highlight">opacity</span> settings with your own.

```typescript
module.exports = {
  theme: {
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
  },
};
```

Please read the official `TailwindThemingDocumentation` if you want a full overview of the theming options.
