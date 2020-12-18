import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsUiComponent } from './widgets-ui.component';

const routes: Routes = [
  { path: '',  component: WidgetsUiComponent }
];

@NgModule({
  declarations: [WidgetsUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WidgetsUiModule { }
