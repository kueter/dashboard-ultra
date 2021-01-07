import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss']
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

  ngOnInit(): void {
  }

}
