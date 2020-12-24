import { query, style, animate, group, trigger, transition  } from '@angular/animations';
import { AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
    ])
  ]
})
export class LayoutComponent implements OnInit, AfterContentChecked  {
  sideState: boolean = false;
  bread: any;


  constructor(private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.ocBox();
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }


  preparedRoute(outlet: RouterOutlet) {

    switch (outlet.activatedRouteData.animation) {
      case 'widgets':
        this.bread = {path: 'Widgets', icon: 'fa-cube'};
        break;
      case 'layouts':
        this.bread = {path: 'Layouts', icon: 'fa-clone'};
        break;
      case 'charts':
          this.bread = {path: 'Charts', icon: 'fa-chart-pie'};
          break;
      case 'forms':
            this.bread = {path: 'Forms', icon: 'fa-edit'};
          break;
      case 'composants':
            this.bread = {path: 'Elements', icon: 'fa-tree'};
          break;
      case 'tables':
            this.bread = {path: 'Tables', icon: 'fa-table'};
          break;
      case 'scheduler':
            this.bread = {path: 'Scheduler', icon: 'fa-calendar'};
          break;
      case 'booker':
            this.bread = {path: 'Library', icon: 'fa-book'};
          break;



      default:
        break;
    }

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  getSide(event) {
      this.sideState = event;
  }


  ocBox() {
    $("._chatbox").fadeIn()
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800);
  }

  ccBox() {
    $("._chatbox").fadeOut()
    .css({ bottom: '1%',right:'1%', position: 'fixed' })
    .animate({ height: '0px' }, 800);
  }

  reduceBox() {
    $("._chatbox")
    .css({ bottom: '1%',right:'1%', position: 'fixed' })
    .animate({ height: '35px' }, 800);
  }


}
