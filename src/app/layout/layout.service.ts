import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { layDb } from './layout.database';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  layoutState = new Subject<boolean>();

  constructor() {
    layDb.uistates.toArray().then((_)=> {
      console.log('Init:' + _[0].state);
      this.state = _[0].state;
      this.layoutState = new BehaviorSubject<boolean>(_[0].state);
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


  initDb() {
      // ui state & color
      // layDb.uistates.add({ id: 1, state: false });

      // others data & reteived data

      layDb.uistates.toArray().then(_=> console.log(_));
      layDb.nbarcolors.toArray().then(_=> console.log(_));
      layDb.sbarcolors.toArray().then(_=> console.log(_));

  }

}
