import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';
import { DemoExampleComponent } from './demo-example.component';



@NgModule({
  declarations: [DemoExampleComponent, PrismComponent],
  imports: [CommonModule],
  exports: [DemoExampleComponent, PrismComponent]
})
export class DemoExampleModule { }
