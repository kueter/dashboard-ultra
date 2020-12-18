import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookerComponent } from './booker.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: BookerComponent}
];

@NgModule({
  declarations: [BookerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookerModule { }
