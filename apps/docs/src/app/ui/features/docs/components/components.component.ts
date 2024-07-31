import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'flowbite-components',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  @HostBinding('class')
  protected readonly hostClass = 'w-full';
}
