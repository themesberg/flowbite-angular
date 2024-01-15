import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import {
  Placement,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown',
  template: `
    <button
      type="button"
      class="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
      (click)="toggle()"
      #button
    >
      <span class="flex items-center rounded-md text-sm px-4 py-2">
        {{ label }}
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="ml-2 h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </span>
    </button>
    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 min-w-fit absolute"
      #dropdown
      [style.display]="isOpen ? 'block' : 'none'"
      [style.width]="width + 'px'"
    >
      <div class="py-1 text-sm text-gray-700 dark:text-gray-200">
        <ul class="py-1">
          <ng-content></ng-content>
        </ul>
      </div>
    </div>
  `,
})
export class DropdownComponent implements AfterViewInit {
  @Input() label = 'Dropdown';
  @Input() isOpen = false;
  @Input() position: Placement = 'bottom-start';
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  x = 0;
  y = 0;
  width = 0;

  toggle() {
    this.isOpen = !this.isOpen;
    this.calculatePosition();
  }

  calculatePosition() {
    computePosition(this.button.nativeElement, this.dropdown.nativeElement, {
      placement: this.position,
      middleware: [offset(8), flip(), shift()],
    }).then(({ x, y }: { x: number; y: number }) => {
      this.dropdown.nativeElement.style.left = x + 'px';
      this.dropdown.nativeElement.style.top = y + 'px';
      this.width = this.button.nativeElement.offsetWidth;
    });
  }

  ngAfterViewInit() {
    autoUpdate(this.button.nativeElement, this.dropdown.nativeElement, () => {
      if (!this.isOpen) return;
      this.calculatePosition();
    });
  }

  // Onclick outside the dropdown, close it
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (
      !this.dropdown.nativeElement.contains(event.target) &&
      this.isOpen &&
      !this.button.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }
}
