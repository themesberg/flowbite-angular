import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  $collapsed = new BehaviorSubject<boolean>(false);

  setCollapsed(collapsed: boolean) {
    this.$collapsed.next(collapsed);
  }

  toggleCollapsed() {
    const collapsed = this.$collapsed.getValue();
    this.setCollapsed(!collapsed);
  }
}
