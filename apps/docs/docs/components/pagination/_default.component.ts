import { PaginationComponent } from 'flowbite-angular/pagination';

import { Component, signal } from '@angular/core';

@Component({
  // ng-doc-ignore-line
  selector: 'flowbite-demo-pagination-default',
  imports: [PaginationComponent],
  // ng-doc-ignore-line
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {
  private readonly _testDatas: IdNameDto[] = [];

  readonly currentPage = signal(1);
  readonly pageSize = signal(10);
  readonly testDatas = signal(PagedResult.empty<IdNameDto>());

  constructor() {
    // fetch test datas
    for (let i = 1; i <= 105; i++) {
      this._testDatas.push({ id: i, name: 'John Doe' });
    }

    // simulate API call
    this.pageChangeHandler(1);
  }

  pageChangeHandler(page: number) {
    this.currentPage.set(page);

    // Call your API here
    // The following lines of code simulates a backend query
    const _items: IdNameDto[] = [];
    const _start = (this.currentPage() - 1) * this.pageSize();
    const _end = Math.min(this._testDatas.length, _start + this.pageSize());

    for (let i = _start; i < _end; i++) {
      _items.push({ id: i + 1, name: 'John Doe' });
    }

    this.testDatas.set({
      items: _items,
      totalItems: this._testDatas.length,
    });
  }
}

export interface IdNameDto {
  id: number;
  name: string;
}

export interface PagedResult<T> {
  items: T[];
  totalItems: number;
}

export const PagedResult = {
  empty<T>(): PagedResult<T> {
    return { items: [], totalItems: 0 };
  },
};
