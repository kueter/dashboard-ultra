import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesUiComponent } from './tables-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: TablesUiComponent }
];

@NgModule({
  declarations: [TablesUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TablesUiModule { }
