import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { layDb } from './layout.database';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  layoutState = new BehaviorSubject<boolean>(true);

  constructor() {

    layDb.uistates.toArray().then((_)=> {
      this.state = _[0].state;
      this.layoutState = new BehaviorSubject<boolean>(this.state);
    });
    // layDb.apps.toArray().then(_=> console.log(_));
  }

  setState() {
    this.state = !this.state;
    this.layoutState.next(this.state);
    layDb.uistates.update(1, {state: this.state});
  }

  getState() {
    return this.layoutState.asObservable();
  }
}
