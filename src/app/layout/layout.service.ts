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
  private layoutState: Subject<boolean>;
  private bgColor: Subject<string>;
  private colors = [];

  icon ='fa-minus-circle';

  chatstate = false;


  constructor(private storage: StorageMap) {
    this.init();
  }

  setState() {
    this.state = !this.state;
    this.layoutState.next(this.state);
    this.storage.set('state',this.state).subscribe(_=> console.log(_));
  }

  setColor(item: string) {
      this.bgColor.next(item);
      this.storage.set('bgcolor',item).subscribe(_=> console.log(_));
  }


  getState() {
    return this.layoutState.asObservable();
  }

  getbColor() {
    return this.bgColor.asObservable();
  }

  get Colors () {
    return this.colors;
  }


  init() {
    this.storage.get('state').subscribe((_:boolean) => {
        if(typeof _ == 'undefined') {
          this.storage.set('state', false).subscribe();
          this.layoutState.next(false);
        }
        else {
          this.layoutState.next(_);
        }
    });

    this.storage.get('bgcolor').subscribe((_:string) => {
      if(typeof _ == 'undefined') {
        this.storage.set('bgcolor', '#46957B').subscribe();
        this.bgColor.next('#46957B');
      }
      else {
        this.bgColor.next(_);
      }
    });

    this.storage.get('colors').subscribe((_: string []) => {
      if(typeof _ == 'undefined') {
        const colors = ['#3171b7','#46957B', '#EB4034','#363534', '#FC9228', '#FC6128', '#820972'];
        this.storage.set('colors', colors).subscribe();
        this.colors = colors;
      }
      else {
        this.colors = _;
      }
    });

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
