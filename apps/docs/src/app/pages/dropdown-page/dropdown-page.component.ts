import { Component } from '@angular/core';

@Component({
    selector: 'flowbite-dropdown-page',
    template: `
        <flowbite-demo-page>
            <flowbite-demo-example
                title="Dropdown"
                [codes]="[examples[0]]"
            >
                <div class="flex flex-wrap gap-2">
                    <flowbite-dropdown>
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                </div>
            </flowbite-demo-example>
            <flowbite-demo-example
                title="Dropdown with divider"
                [codes]="[examples[1]]"
            >
                <div class="flex flex-wrap gap-2">
                    <flowbite-dropdown>
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-divider></flowbite-dropdown-divider>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                </div>
            </flowbite-demo-example>
            <flowbite-demo-example
                title="Dropdown with header"
                [codes]="[examples[2]]"
            >
                <div class="flex flex-wrap gap-2">
                    <flowbite-dropdown>
                        <flowbite-dropdown-header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                bonnie@flowbite.com
                            </span>
                        </flowbite-dropdown-header>
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                </div>
            </flowbite-demo-example>
            <flowbite-demo-example
                title="Dropdown placement"
                [codes]="[examples[3]]"
            >
                <div class="flex flex-wrap gap-2">
                    <flowbite-dropdown [position]="'top-start'">
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                    <flowbite-dropdown [position]="'top'">
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                    <flowbite-dropdown [position]="'top-end'">
                        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
                        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
                    </flowbite-dropdown>
                </div>
                </flowbite-demo-example>
        </flowbite-demo-page>
`
})
export class DropdownPageComponent {
    examples = [
        {
            language: 'html',
            code: `
<flowbite-dropdown>
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
        },
        {
            language: 'html',
            code: `
<flowbite-dropdown> 
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-divider></flowbite-dropdown-divider>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
        },
        {
            language: 'html',
            code: `
<flowbite-dropdown>
    <flowbite-dropdown-header>
        <span className="block text-sm">
            Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
        </span>
    </flowbite-dropdown-header>
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
        },
        {
            language: 'html',

            code: `
<flowbite-dropdown [position]="'top-start'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown [position]="'top'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown [position]="'top-end'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>`,
        }
    ];
}