{% macro display(themes) %}

<div class="border-t border-gray-300 dark:border-gray-600 my-4"></div>

# Themes

{% for theme in themes %}

## {{ theme.title }}

{% if theme.description %}

<!-- prettier-ignore -->
> **Note**
> {{ theme.description }}

{% endif %}

<!-- prettier-ignore -->
```typescript
{{ theme.content }}
```

{% endfor %} {% endmacro %}
