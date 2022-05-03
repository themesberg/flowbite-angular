import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent, DarkThemeToggleComponent } from './components';
import { ThemeService } from './services';

const COMPONENTS = [NavbarComponent, DarkThemeToggleComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [ThemeService],
})
export class FlowbiteModule {}
