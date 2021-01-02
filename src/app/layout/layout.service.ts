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
      // insert data
      // layDb.colors.add({value: '#3171B7'});
      // layDb.colors.add({value: '#e81341'});
      // layDb.colors.add({value: '#46957B'});
      // layDb.colors.add({value: '#DEB252'});
      // layDb.colors.add({value: '#ED0707'});
      // layDb.colors.add({value: '#363535'});
      // layDb.colors.add({value: '#FFFFFF'});

      // others data & reteived data

      // layDb.uistates.toArray().then(_=> console.log(_));
      // layDb.nbarcolors.toArray().then(_=> console.log(_));
      layDb.colors.toArray().then(_=> console.log(_));

  }

}
