import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[flowbiteButtonGroup]',
  standalone: true
})
export class ButtonGroupDirective implements OnInit {

  baseStyle = 'flex items-center gap-1 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white w-auto w-max-content';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.baseStyle.split(' ').forEach((style) => {
      if (style === '') return;
      this.renderer.addClass(this.elementRef.nativeElement, style);
    });
  }






}
