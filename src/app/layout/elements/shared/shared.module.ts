import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
  ]
  ,
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
