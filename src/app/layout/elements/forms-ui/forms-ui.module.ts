import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsUiComponent } from './forms-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: FormsUiComponent }
];

@NgModule({
  declarations: [FormsUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsUiModule { }
