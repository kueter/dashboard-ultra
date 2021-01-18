import { query, style, animate, group, trigger, transition, keyframes, state  } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { filter, take } from 'rxjs/operators';
import { LayoutService } from './layout.service';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(100%)' }))], {
          optional: true,
      }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('.4s ease-out', style({ transform: 'translateX(0%)' }))], {
          optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' }), animate('.4s ease-out', style({ transform: 'translateX(-100%)' }))], {
          optional: true,
      }),
  ]),
];

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('outletAnimation', [
        transition('* => widgets', left),
        transition('widgets => *', right),
        transition('layouts => forms', right),
        transition('layouts => charts', right),
        transition('layouts => tables', right),
        transition('layouts => scheduler', right),
        transition('layouts => booker', right),
        transition('layouts => composants', right),
        transition('charts => layouts', left),
        transition('charts => forms', right),
        transition('charts => tables', right),
        transition('charts => composants', right),
        transition('charts => scheduler', right),
        transition('charts => booker', right),
        transition('forms  => layouts', left),
        transition('forms  => charts', left),
        transition('forms  => tables', right),
        transition('forms  => scheduler', right),
        transition('forms  => composants', right),
        transition('forms  => booker', right),
    ]),
    trigger('x-x0', [
      state('left', style({ transform: 'translateX(0%)' })),
      state('right', style({ transform: 'translateX(235%)' })),
      transition('left => right', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(235%)' })
      ]))),
      transition('right => left', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(0%)' })
      ])))
    ]),

    trigger('x-y0', [
      state('right', style({ transform: 'translateX(0%)' })),
      state('left', style({ transform: 'translateX(-42%)' })),
      transition('right => left', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(-42%)' })
      ]))),
      transition('left => right', animate('1s ease-in-out', keyframes([
        style({ transform: 'translateX(0%)' })
      ])))
    ])

  ]
})
export class LayoutComponent implements OnInit  {

  colors: any;
  state = false;
  mForm: FormGroup;
  sibState: boolean;


  @ViewChild('perfectScroll') perfectScroll: PerfectScrollbarComponent;

  constructor(public lservice: LayoutService) {

    this.sibState = JSON.parse(localStorage.getItem('state'));
    this.lservice.layoutState.next(this.sibState);

    // localStorage.setItem('state', 'true');
    // localStorage.setItem('bgcolor', '#46957B');
  }


  ngOnInit(): void {
    this.mForm = new FormGroup({
      message: new FormControl('', Validators.required)
    });
  }




  // routes prepare and map with animation trigger
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  getStmt(event: any) {
    this.state = event;
  }

  send() {
    const form = this.mForm.value;
      this.lservice.setMessage({ track: 'sent', message: form.message, time: 'you • 51 min', img: '../../assets/img/AF2.png' })
      this.perfectScroll.directiveRef.update();
      this.perfectScroll.directiveRef.scrollToBottom(-100, 500);
      this.mForm.reset();
  }

}
