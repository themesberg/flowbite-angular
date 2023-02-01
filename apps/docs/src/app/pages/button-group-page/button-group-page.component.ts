import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FlowbiteButtonGroup } from '@flowbite-angular/lib';

@Component({
  selector: 'flowbite-button-group-page',
  standalone: true,
  imports: [NgFor, FlowbiteButtonGroup],
  template: `
  <flowbite-button-group [color]="'purple'" [outline]="false">
    <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
       <!-- <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> -->
       Button 1
    </button>
  </flowbite-button-group>
  <flowbite-button-group [color]="'success'" [outline]="false">
    <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
       <!-- <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> -->
       Button 1
    </button>
  </flowbite-button-group>


  `,
  styles: [],
})
export default class ButtonGroupPageComponent { }
