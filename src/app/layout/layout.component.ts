import { query, style, animate, group, trigger, transition  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { LayoutService } from './layout.service';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(100%)' }))], {
          optional: true,
      }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(-100%)' }))], {
          optional: true,
      }),
  ]),
];

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('outletAnimation', [
        transition('* => widgets', left),
        transition('widgets => *', right),
        transition('layouts => forms', right),
        transition('layouts => charts', right),
        transition('layouts => tables', right),
        transition('layouts => scheduler', right),
        transition('layouts => booker', right),
        transition('layouts => composants', right),
        transition('charts => layouts', left),
        transition('charts => forms', right),
        transition('charts => tables', right),
        transition('charts => composants', right),
        transition('charts => scheduler', right),
        transition('charts => booker', right),
        transition('forms  => layouts', left),
        transition('forms  => charts', left),
        transition('forms  => tables', right),
        transition('forms  => scheduler', right),
        transition('forms  => composants', right),
        transition('forms  => booker', right),
    ])
  ]
})
export class LayoutComponent implements OnInit  {

  bread: any;
  colors: any;


  constructor(public lservice: LayoutService,private router: Router) {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    ).subscribe((_: any) => {
      this.setBreadcrumb(_?.url)
    });

    // layDb.colors.toArray().then(_=> this.colors = _);
  }


  ngOnInit(): void {
    this.lservice.initDb();
  }

  setBreadcrumb(bread: string) {
    switch (bread) {
      case '/dashboard/widgets':
        this.bread = {path: 'Widgets', icon: 'fa-cube'};
        break;
      case '/dashboard/layouts':
        this.bread={path: 'Layouts', icon: 'fa-clone'};
        break;
      case '/dashboard/charts':
          this.bread = {path: 'Charts', icon: 'fa-chart-pie'};
          break;
      case '/dashboard/forms':
            this.bread={path: 'Forms', icon: 'fa-edit'};
          break;
      case '/dashboard/composants':
            this.bread={path: 'Elements', icon: 'fa-tree'};
          break;
      case '/dashboard/tables':
            this.bread={path: 'Tables', icon: 'fa-table'};
          break;
      case '/dashboard/scheduler':
            this.bread={path: 'Scheduler', icon: 'fa-calendar'};
          break;
      case '/dashboard/booker':
            this.bread={path: 'Library', icon: 'fa-book'};
          break;
      default:
        break;
    }
  }


  // routes prepare and map with animation trigger
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
