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

  lists = [];

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
