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
  templateUrl: './dropdown.component.html',
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
