{% macro implements() %}

> <span class="inline-flex place-content-center gap-2 h-full *:!m-0">
>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-green-500">
>     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
>       d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
>   </svg>
>
> This component implements **flowbite-angular configuration standard**
>
> </span>
> {% endmacro %}

{% macro not_implements() %}

> <span class="inline-flex place-content-center gap-2 h-full *:!m-0">
>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-red-500">
>     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
>       d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
>   </svg>
>
> This component does not implements **flowbite-angular configuration standard**
>
> </span>
> {% endmacro %}
