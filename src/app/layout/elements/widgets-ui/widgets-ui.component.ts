import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from '../../layout.service';

declare var $: any;

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss'],
  animations: [
    trigger('itemType', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        // Cards will disappear sequentially with the delay of 300ms
        query(':leave', stagger('300ms', [
          animate('500ms ease-out', keyframes([
            style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
            style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
            style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
  ])
  ]
})
export class WidgetsUiComponent implements OnInit {

  cards = [
    { icon: 'fal fa-wifi fa-2x' ,title: 'Requests by day', detail: '20% usual quota', mount: '1.5k'},
    { icon: 'fal fa-users fa-2x' ,title: 'Client Flux', detail: 'below 5k peoples have registered', mount: '15k'},
    { icon: 'fal fa-university fa-2x' ,title: 'Amount Bank', detail: 'All is fine with statement', mount: '12 M'},
    { icon: 'fad fa-people-carry fa-2x' ,title: 'Employee', detail: 'Everybody feel good', mount: '0.5k'},
  ];

  lists = [
    { avatar: '../../../../assets/img/christian.jpg', name: 'Chris', description: 'Last seen watching Arrested Development just now.'},
    { avatar: '../../../../assets/img/daniel.jpg', name: 'Dany', description: 'Last seen watching Arrested Development just now.'},
    { avatar: '../../../../assets/img/elliot.jpg', name: 'Elliot', description: 'Last seen watching Arrested Development just now.'},
    { avatar: '../../../../assets/img/jenny.jpg', name: 'Jenny', description: 'Last seen watching Arrested Development just now.'},
    { avatar: '../../../../assets/img/mark.png', name: 'Mark', description: 'Last seen watching Arrested Development just now.'},
    { avatar: '../../../../assets/img/molly.png', name: 'Molly', description: 'Last seen watching Arrested Development just now.'},
  ];

  emojis = ['&#128512','&#128513', '&#128076','&#128078','&#128079','&#128070','&#9994','&#9997','&#128071'];

  discussions = [
      { avatar: '../../../../assets/img/christian.jpg', who: 'Christian', comment: 'Hi amazing work, I just wanted to know if it\'s possible to use this code with named routes in flutter?', date: 'Aug 21, 2020'},
      { avatar: '../../../../assets/img/jenny.jpg', who: 'Jenny', comment: 'Yes do this return EnterExitRoute(exitPage: SecondPage(), enterPage: ThirdPage());', date: 'Aug 21, 2020'},
  ];

  constructor(public lservice: LayoutService) { }

  commentForm: FormGroup;

  ngOnInit(): void {

    this.commentForm = new FormGroup({
      comment: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }


  pushComment() {
      const form = this.commentForm.value;

      const comment = {
        avatar: '../../../../assets/img/AM3.png',
        who: 'You',
        comment: form.comment,
        date: 'Aug 21, 2020'
      };

      $('.conty').animate({
        scrollTop: $('.conty')[0].scrollHeight - $('.conty')[0].clientHeight
      }, 1000, ()=> {
        this.discussions.push(comment);
      });

  }

}
