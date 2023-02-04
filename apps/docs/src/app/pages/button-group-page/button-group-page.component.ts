import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FlowbiteButtonGroup } from '@flowbite-angular/lib';
import { RouterModule } from '@angular/router';
import { DemoExampleModule } from '../../common/demo-example/demo-example.module';


@Component({
  selector: 'flowbite-button-group-page',
  standalone: true,
  imports: [NgFor, FlowbiteButtonGroup, RouterModule, DemoExampleModule],
  template: `

  <div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">

    <flowbite-demo-example title="defualt"  [codes]="[examples[0]]">
        <flowbite-button-group>
              <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]; let i = index" >
                example {{i+1}}
              </button>
          </flowbite-button-group>
    </flowbite-demo-example>

    <flowbite-demo-example title="outline"  [codes]="[examples[1]]">
        <flowbite-button-group [outline]="true">
              <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]; let i = index" >
                example {{i+1}}
              </button>
          </flowbite-button-group>
    </flowbite-demo-example>

    <flowbite-demo-example title="colors" [codes]="[examples[2]]">
        <div class="flex flex-wrap gap-2">

      <flowbite-button-group  [outline]="false">
          <button type="button" flowbiteButtonGroup >
          Profile
          </button>
          <button type="button" flowbiteButtonGroup >
            Settings
          </button>
          <button type="button" flowbiteButtonGroup >
            Downloads
          </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'success'" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'failure'" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'warning'">
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'dark'" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'light'" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'purple'" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>
  </div>
    </flowbite-demo-example>

    <flowbite-demo-example title="colors outline" [codes]="[examples[2]]">
        <div class="flex flex-wrap gap-2">

      <flowbite-button-group  [outline]="true">
          <button type="button" flowbiteButtonGroup >
          Profile
          </button>
          <button type="button" flowbiteButtonGroup >
            Settings
          </button>
          <button type="button" flowbiteButtonGroup >
            Downloads
          </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'success'"  [outline]="true">
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'failure'" [outline]="true" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'warning'"  [outline]="true">
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'dark'"  [outline]="true">
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'light'"  [outline]="true">
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>

      <flowbite-button-group [color]="'purple'" [outline]="true" >
        <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
          Button 1
        </button>
      </flowbite-button-group>
  </div>
    </flowbite-demo-example>

    <flowbite-demo-example title="icons" [codes]="[examples[4]]">
        <flowbite-button-group [color]="'dark'">
          <button type="button" flowbiteButtonGroup >
          Profile
          <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          </button>
          <button type="button" flowbiteButtonGroup >
            Settings
            <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
          </button>
          <button type="button" flowbiteButtonGroup >
            Downloads
            <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
          </button>
        </flowbite-button-group>
    </flowbite-demo-example>

    <flowbite-demo-example title="icon outline" [codes]="[examples[5]]">
        <div class="flex flex-wrap gap-2">
        <flowbite-button-group [color]="'info'" [outline]="true">
          <button type="button" flowbiteButtonGroup >
          Profile
          <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          </button>
          <button type="button" flowbiteButtonGroup >
            Settings
            <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
          </button>
          <button type="button" flowbiteButtonGroup >
            Downloads
            <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
          </button>
        </flowbite-button-group>
  </div>


  `,
  styles: [],
})
export default class ButtonGroupPageComponent {

  examples = [
    {
      language: 'html',
      code: `
<flowbite-button-group>
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]; let i = index"> Example {{i+1}}
  </button>
</flowbite-button-group>`
    },
    {
      language: 'html',
      code: `
<flowbite-button-group [outline]="true">
      <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]; let i = index" >
        example {{i+1}}
      </button>
</flowbite-button-group>`
    },
    {
      language: 'html',
      code: `
<flowbite-button-group [color]="'dark'" [outline]="true">
  <button type="button" flowbiteButtonGroup >
  Profile
  </button>
  <button type="button" flowbiteButtonGroup >
    Settings
  </button>
  <button type="button" flowbiteButtonGroup >
    Downloads
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'success'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'failure'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'warning'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'dark'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'light'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'purple'" [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>`
    },
    {
      language: 'html',
      code: `
<flowbite-button-group  [outline]="true">
    <button type="button" flowbiteButtonGroup >
    Profile
    </button>
    <button type="button" flowbiteButtonGroup >
      Settings
    </button>
    <button type="button" flowbiteButtonGroup >
      Downloads
    </button>
</flowbite-button-group>

<flowbite-button-group [color]="'success'"  [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'failure'" [outline]="true" >
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'warning'"  [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'dark'"  [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'light'"  [outline]="true">
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>

<flowbite-button-group [color]="'purple'" [outline]="true" >
  <button type="button" flowbiteButtonGroup *ngFor="let item of [1,1,1]" >
    Button 1
  </button>
</flowbite-button-group>`
    },
    {
      language: 'html',
      code: `
<flowbite-button-group [color]="'dark'">
  <button type="button" flowbiteButtonGroup >
  Profile
  </button>
  <button type="button" flowbiteButtonGroup >
    Settings
  </button>
  <button type="button" flowbiteButtonGroup >
    Downloads
  </button>
</flowbite-button-group>`
    },
    {
      language: 'html',
      code: `
<flowbite-button-group [color]="'info'" [outline]="true">
  <button type="button" flowbiteButtonGroup >
  Profile
  <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
  </button>
  <button type="button" flowbiteButtonGroup >
    Settings
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
  </button>
  <button type="button" flowbiteButtonGroup >
    Downloads
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
  </button>
</flowbite-button-group>  `
    }
  ]
}
