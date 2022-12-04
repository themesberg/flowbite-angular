import { Component, Input } from '@angular/core';
import {BooleanInput} from "ngx-boolean-input";



@Component({
  selector: 'flowbite-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input()
  @BooleanInput()
  rounded: boolean | string | undefined;

  @Input()
  @BooleanInput()
  roundedFull: boolean | string | undefined;

  @Input()
  @BooleanInput()
  bordered: boolean | string | undefined;
  @Input() icon = "";

  @Input() customClass = ""


  getClasses(): string {
    const result: string[] = []
    if (this.rounded) {
      result.push("rounded")
    }
    if (this.roundedFull) {
      result.push("rounded-full")
    }

    if (this.bordered) {
      result.push("p-1 ring-2 ring-gray-300 dark:ring-gray-500")
    }

    if (this.customClass) {
      result.push(this.customClass)
    }

    return result.join(" ")
  }

}
