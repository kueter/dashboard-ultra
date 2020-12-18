import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsUiComponent } from './charts-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: ChartsUiComponent }
];

@NgModule({
  declarations: [ChartsUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChartsUiModule { }
