import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { layDb } from './layout.database';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  layoutState = new Subject<boolean>();
  bgColor = new Subject<string>();

  icon ='fa-minus-circle';

  chatstate = false;

  constructor() {
    // get init state
    layDb.uistates.toArray().then((_)=> {
      this.state = _[0].state;
      this.layoutState = new BehaviorSubject<boolean>(_[0].state);
    });

    // get init background color
    layDb.sbarcolors.toArray().then((_) => {
      this.bgColor = new BehaviorSubject<string>(_[0].color);
    });

  }

  setState() {
    this.state = !this.state;
    this.layoutState.next(this.state);
    layDb.uistates.update(1, {state: this.state});
  }

  setBgColor(item: string) {
      this.bgColor.next(item);
      layDb.sbarcolors.update(1, {color: item});
  }


  getState() {
    return this.layoutState.asObservable();
  }

  getBgColor() {
    return this.bgColor.asObservable();
  }


  initDb() {
      // insert data
      // layDb.colors.add({value: '#3171B7'});


      // others data & reteived data

      // layDb.uistates.toArray().then(_=> console.log(_));
  }


  ocBox() {
    this.cBoxc();
    $("._chatbox").fadeIn()
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800, () => {
        this.icon ='fa-minus-circle'
      });
  }

  osbox() {
    this.ccBox();
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

    if(this.chatstate == true) {
      $("._chatbox")
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '35px' }, 800, () =>{
          this.icon = 'fa-square';
      });
    }

    if(this.chatstate == false) {
      $("._chatbox")
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800, () => {
          this.icon = 'fa-minus-circle';
      });
    }

  }

}
