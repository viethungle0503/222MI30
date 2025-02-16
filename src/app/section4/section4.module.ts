import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  section4RoutingModule,
  RoutingComponent,
} from './section4-routing.module';

@NgModule({
  declarations: [RoutingComponent],
  imports: [CommonModule, section4RoutingModule, FormsModule, HttpClientModule],
})
export class section4Module {}
