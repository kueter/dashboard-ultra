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
    ).subscribe((_)=> {
      console.log(_);
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
    switch (bread) {
      case 'widgets':
        this.breadcrumb.next({path: 'Widgets', icon: 'fa-cube'});
        break;
      case 'layouts':
        this.breadcrumb.next({path: 'Layouts', icon: 'fa-clone'});
        break;
      case 'charts':
          this.breadcrumb.next({path: 'Charts', icon: 'fa-chart-pie'});
          break;
      case 'forms':
            this.breadcrumb.next({path: 'Forms', icon: 'fa-edit'});
          break;
      case 'composants':
            this.breadcrumb.next({path: 'Elements', icon: 'fa-tree'});
          break;
      case 'tables':
            this.breadcrumb.next({path: 'Tables', icon: 'fa-table'});
          break;
      case 'scheduler':
            this.breadcrumb.next({path: 'Scheduler', icon: 'fa-calendar'});
          break;
      case 'booker':
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
