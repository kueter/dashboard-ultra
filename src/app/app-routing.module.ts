import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard/widgets', pathMatch:'full'},
    { path: 'dashboard', component: LayoutComponent,
      children: [
          { path: '' , redirectTo: 'widgets', pathMatch: 'full' },
          { path: 'widgets', loadChildren: () => import('./layout/elements/widgets-ui/widgets-ui.module').then(m => m.WidgetsUiModule), data:{ animation: 'widgets'} },
          { path: 'layouts', loadChildren: () => import('./layout/elements/layouts-ui/layouts-ui.module').then(m => m.LayoutsUiModule), data:{ animation: 'layouts'} },
          { path: 'forms', loadChildren: () => import('./layout/elements/forms-ui/forms-ui.module').then(m => m.FormsUiModule), data:{ animation: 'forms'} },
          { path: 'tables', loadChildren: () => import('./layout/elements/tables-ui/tables-ui.module').then(m => m.TablesUiModule), data:{ animation: 'tables'} },
          { path: 'charts', loadChildren: () => import('./layout/elements/charts-ui/charts-ui.module').then(m => m.ChartsUiModule), data:{ animation: 'charts'} },
          { path: 'composants', loadChildren: () => import('./layout/elements/composants-ui/composants-ui.module').then(m => m.ComposantsUiModule), data:{ animation: 'composants'} },
          { path: 'scheduler', loadChildren: () => import('./layout/elements/scheduler-ui/scheduler-ui.module').then(m => m.SchedulerUiModule), data:{ animation: 'scheduler'} },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
