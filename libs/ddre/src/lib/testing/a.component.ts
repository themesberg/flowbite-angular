import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'a',
  template: '<router-outlet />',
  imports: [RouterOutlet],
})
export class AComponent {}
