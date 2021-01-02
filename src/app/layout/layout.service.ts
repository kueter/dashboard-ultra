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
    ).subscribe(x => console.log(x))

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


  initDb() {
      // ui state & color
      // layDb.uistates.add({ id: 1, state: false });

      // others data & reteived data

      layDb.uistates.toArray().then(_=> console.log(_));
      layDb.nbarcolors.toArray().then(_=> console.log(_));
      layDb.sbarcolors.toArray().then(_=> console.log(_));

  }

}
