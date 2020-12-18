import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerUiComponent } from './scheduler-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: SchedulerUiComponent }
];

@NgModule({
  declarations: [SchedulerUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SchedulerUiModule { }
