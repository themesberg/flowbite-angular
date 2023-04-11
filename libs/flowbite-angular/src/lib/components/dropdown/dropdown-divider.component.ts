import { Component } from "@angular/core";
import { DropdownComponent } from "./dropdown.component";

@Component({
    selector: "flowbite-dropdown-divider",
    template: `
        <li class="my-1 h-px bg-gray-100 dark:bg-gray-600"></li>
    `,
})

export class DropdownDividerComponent {
    constructor(readonly dropdown: DropdownComponent) { }
}