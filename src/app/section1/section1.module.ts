import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';

import { Section1RoutingModule } from './section1-routing.module';

@NgModule({
  declarations: [
    MyComponentComponent,
  ],
  imports: [
    CommonModule,
    Section1RoutingModule
  ],
  exports: [
    MyComponentComponent,
  ]
})
export class Section1Module { }
