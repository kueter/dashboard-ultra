import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantsUiComponent } from './composants-ui.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: ComposantsUiComponent }
];

@NgModule({
  declarations: [ComposantsUiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComposantsUiModule { }
