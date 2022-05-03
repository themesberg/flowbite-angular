import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes.map(({ href, component }) => ({ path: href, component }))
    ),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
