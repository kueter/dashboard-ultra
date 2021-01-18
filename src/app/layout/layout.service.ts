import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {


  // layoutState = new Subject<any>();
  // bgColor = new Subject<string>();
  layoutState = new BehaviorSubject<boolean>(null);
  bgColor = new  BehaviorSubject<string>('#46957B');
  colors = [];

  bread = new BehaviorSubject<any>({path: 'Widgets', icon: 'fa-cube'});

  messages = [
  { track: 'received', message: 'Somebody there, i need help', time: 'Kena • 51 min', img: '../../assets/img/AF2.png' },
  { track: 'sent', message: 'Hello Kena, what can i do for you ?', time: 'You • 2 min', img: '../../assets/img/AM3.png' },
  { track: 'received', message: 'It \'s about socket io in angular ! ', time: 'Kena • 1 min', img: '../../assets/img/AF2.png' }
  ];

  messageSubject = new BehaviorSubject<any[]>(this.messages);

  icon ='fa-minus-circle';

  chatstate = false;


  constructor(private storage: StorageMap, private router: Router) {
    // this.init();
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


  init() {
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    ).subscribe((_: any) => {
      this.setBreadcrumb(_?.url);
    });


    this.storage.get('state').subscribe((_:any) => {
        if(typeof _ == 'undefined') {
          this.storage.set('state', false).subscribe();
          this.layoutState = new BehaviorSubject<any>(false);
        }

        this.layoutState.next(_);

    });

    this.storage.get('bgcolor').subscribe((_:string) => {
      if(typeof _ == 'undefined') {
        this.storage.set('bgcolor', '#46957B').subscribe();
        this.bgColor = new BehaviorSubject<string>('#46957B');
      }

      this.bgColor.next(_);
    });

    this.storage.get('colors').subscribe((_: string []) => {
      console.log(_);
      if(typeof _ == 'undefined') {
        const colors = ['#3171b7','#46957B', '#EB4034','#363534', '#FC9228', '#FC6128', '#820972'];
        this.storage.set('colors', colors).subscribe();
        this.colors = colors;
      }

      this.colors = _;
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


  // Chat

  setMessage(item: any) {
    this.messages.push(item);
    this.messageSubject.next(this.messages);
  }

  getMessage() {
    return this.messageSubject.asObservable();
  }

  //

  setBreadcrumb(bread: string) {
    switch (bread) {
      case '/dashboard/widgets':
        this.bread.next( {path: 'Widgets', icon: 'fa-cube'});
        break;
      case '/dashboard/layouts':
        this.bread.next({path: 'Layouts', icon: 'fa-clone'});
        break;
      case '/dashboard/charts':
          this.bread.next( {path: 'Charts', icon: 'fa-chart-pie'});
          break;
      case '/dashboard/forms':
            this.bread.next({path: 'Forms', icon: 'fa-edit'});
          break;
      case '/dashboard/composants':
            this.bread.next({path: 'Elements', icon: 'fa-tree'});
          break;
      case '/dashboard/tables':
            this.bread.next({path: 'Tables', icon: 'fa-table'});
          break;
      case '/dashboard/scheduler':
            this.bread.next({path: 'Scheduler', icon: 'fa-calendar'});
          break;
      case '/dashboard/booker':
            this.bread.next({path: 'Library', icon: 'fa-book'});
          break;
      default:
        break;
    }
  }

}
