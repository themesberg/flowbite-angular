import { components } from '../../../../common/components';

import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, NgFor, RouterLink],
  selector: 'flowbite-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  components = components.filter((component) => !!component.card);
}
