import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'flowbite-modal',
    template: `
        <div tabindex="-1" aria-hidden="true"
            [ngClass]="{ 
                'hidden': !isOpen
            }"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex {{ positionClasses }}"
            (click)="onBackdropClick($event)">
            <div class="relative w-full h-full md:h-auto" [ngClass]="{
                'max-w-md': size === 'sm',
                'max-w-lg': size === 'md',
                'max-w-4xl': size === 'lg',
                'max-w-7xl': size === 'xl'
            }">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
})
export class ModalComponent {
    @Input() dismissable?: boolean = false;
    @Input() size?: 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() isOpen?: boolean = false;
    @Input() position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center' | 'center-left' | 'center-right' = 'center';

    get positionClasses() {
        switch (this.position) {
            case 'top-left':
                return 'items-start justify-start';
            case 'top-center':
                return 'items-start justify-center';
            case 'top-right':
                return 'items-start justify-end';
            case 'center-left':
                return 'items-center justify-start';
            case 'center':
                return 'items-center justify-center';
            case 'center-right':
                return 'items-center justify-end';
            case 'bottom-left':
                return 'items-end justify-start';
            case 'bottom-center':
                return 'items-end justify-center';
            case 'bottom-right':
                return 'items-end justify-end';
            default:
                return 'items-center justify-center';
        }        
    }

    open() {
        this.isOpen = true;
        this.changeBackdrop();
        console.log(this.positionClasses)
    }

    close() {
        this.isOpen = false;
        this.changeBackdrop();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.changeBackdrop();
    }

    // If isOpen changes, add or remove backdrop
    changeBackdrop() {
        if (this.isOpen) {
            const blurDiv = document.createElement('div');
            blurDiv.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
            blurDiv.id = 'blurDiv';
            document.body.appendChild(blurDiv);
        } else {
            const blurDiv = document.getElementById('blurDiv');
            if (blurDiv) {
                document.body.removeChild(blurDiv);
            }
        }
    }

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    onBackdropClick(event: MouseEvent) {
        console.log(this.dismissable)
        if (event.target == event.currentTarget && this.dismissable) {
            this.close();
        }
    }
}