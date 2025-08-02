{% macro display(themes) %}

<div class="border-t border-gray-300 dark:border-gray-600 my-4"></div>

# Default themes

{% for theme in themes %}

## {{ theme.title }}

{% if theme.description %}

> **Note** > {{ theme.description }}

{% endif %}

```typescript
{
  {
    theme.content;
  }
}
```

{% endfor %} {% endmacro %}
