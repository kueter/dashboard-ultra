import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Subject } from 'rxjs';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  state: boolean;

  // layoutState: BehaviorSubject<boolean>;
  layoutState = new  BehaviorSubject<boolean>(true);
  bgColor: BehaviorSubject<string>;

  icon ='fa-minus-circle';

  chatstate = false;

  constructor(private storage: StorageMap) {
    // get init state


    // get init background color

  }

  setState() {
    this.state = !this.state;
    this.layoutState.next(this.state);
    this.storage.set('state',this.state).subscribe(_=> console.log(_));

  }

  setColor(item: string) {
      this.bgColor.next(item);
  }


  getState() {
    return this.layoutState.asObservable();
  }

  getColor() {
    return this.bgColor.asObservable();
  }


  init() {
    this.storage.get('state').subscribe(_ => console.log(_));
  }



  // settings box

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

  cBoxc() {
    $("._settingbox").fadeIn()
      .css({ top: '20%',right:'1%', position: 'fixed' })
      .animate({ width: '0px', right: '-10%' }, 800);
  }

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
