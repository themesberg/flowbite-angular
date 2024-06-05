import { Injectable, signal } from '@angular/core';

@Injectable()
export class SidebarService {
  private $collapsed = signal<boolean>(false);

  public collapsed = this.$collapsed.asReadonly();

  public setCollapsed(value: boolean) {
    this.$collapsed.set(value);
  }

  public toggleCollapsed() {
    this.$collapsed.set(!this.$collapsed());
  }
}
