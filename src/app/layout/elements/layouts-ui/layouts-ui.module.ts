import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsUiComponent } from './layouts-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  component: LayoutsUiComponent }
];

@NgModule({
  declarations: [LayoutsUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutsUiModule { }
