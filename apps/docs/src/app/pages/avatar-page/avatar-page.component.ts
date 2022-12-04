import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'flowbite-avatar-page',
  templateUrl: './avatar-page.component.html',
  styleUrls: ['./avatar-page.component.css'],
})
export class AvatarPageComponent implements OnInit {

  public code: { language: string; code: string }[] = [];

  ngOnInit(): void {

    this.code = [
      {
        language: 'html',
        code: `
<flowbite-avatar
    [icon]="https://avatars.githubusercontent.com/u/16899513?v=4">
</flowbite-avatar>

<flowbite-avatar
    rounded
    [icon]="https://avatars.githubusercontent.com/u/16899513?v=4">
</flowbite-avatar>

<flowbite-avatar
    roundedFull
    [icon]="https://avatars.githubusercontent.com/u/16899513?v=4">
</flowbite-avatar>
`,
      },
    ];
  }



}
