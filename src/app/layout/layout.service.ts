import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { layDb } from './layout.database';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  layoutState = new Subject<boolean>();
  breadcrumb = new Subject<{path:string, icon: string}>();

  constructor(private router: Router) {
    // get init state
    layDb.uistates.toArray().then((_)=> {
      console.log('Init:' + _[0].state);
      this.state = _[0].state;
      this.layoutState = new BehaviorSubject<boolean>(_[0].state);
    });

    // get current state
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    ).subscribe((_: any)=> {
      console.log(_?.url);
      // this.breadcrumb.next();
      this.setBreadcrumb(_);
    });

  }

  setState() {
    this.state = !this.state;
    this.layoutState.next(this.state);
    layDb.uistates.update(1, {state: this.state});
    layDb.uistates.toArray().then(_=> console.log(_));
  }

  getState() {
    return this.layoutState.asObservable();
  }

  setBreadcrumb(bread: any) {
    switch (bread?.url) {
      case '/dashboard/widgets':
        this.breadcrumb.next({path: 'Widgets', icon: 'fa-cube'});
        break;
      case '/dashboard/layouts':
        this.breadcrumb.next({path: 'Layouts', icon: 'fa-clone'});
        break;
      case 'dashboard/charts':
          this.breadcrumb.next({path: 'Charts', icon: 'fa-chart-pie'});
          break;
      case '/dashboard/forms':
            this.breadcrumb.next({path: 'Forms', icon: 'fa-edit'});
          break;
      case '/dashboard/composants':
            this.breadcrumb.next({path: 'Elements', icon: 'fa-tree'});
          break;
      case '/dashboard/tables':
            this.breadcrumb.next({path: 'Tables', icon: 'fa-table'});
          break;
      case '/dashboard/scheduler':
            this.breadcrumb.next({path: 'Scheduler', icon: 'fa-calendar'});
          break;
      case '/dashboard/booker':
            this.breadcrumb.next({path: 'Library', icon: 'fa-book'});
          break;
      default:
        break;
    }
  }

  getBreadcrumb() {
    return this.breadcrumb.asObservable();
  }




  initDb() {
      // ui state & color
      // layDb.uistates.add({ id: 1, state: false });

      // others data & reteived data

      layDb.uistates.toArray().then(_=> console.log(_));
      layDb.nbarcolors.toArray().then(_=> console.log(_));
      layDb.sbarcolors.toArray().then(_=> console.log(_));

  }

}
