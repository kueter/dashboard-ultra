import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { layDb } from './layout.database';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  layoutState = new Subject<boolean>();

  icon ='fa-minus-circle';
  chatstate = false;

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

  }


  ocBox() {
    $("._chatbox").fadeIn()
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800);
  }

  osbox() {
    $("._settingbox").fadeIn()
      .css({ top: '20%',right:'1%', position: 'fixed' })
      .animate({ width: '300px' }, 800);
  }


  // color settings box

  cBoxc() {
    $("._settingbox").fadeIn()
      .css({ top: '20%',right:'1%', position: 'fixed' })
      .animate({ width: '0px', right: '-10%' }, 800);
  }



  // chats box
  ccBox() {
    $("._chatbox").fadeOut()
    .css({ bottom: '1%',right:'1%', position: 'fixed' })
    .animate({ height: '0px' }, 800);
  }

  reduceBox() {

    this.chatstate =!this.chatstate;

    if(this.state == true) {
      $("._chatbox")
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '35px' }, 800, () =>{
          this.icon = 'fa-square'
      });
    }

    if(this.chatstate == false) {
      $("._chatbox")
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800, () => {
          this.icon = 'fa-minus-circle'
      });
    }

  }

}
