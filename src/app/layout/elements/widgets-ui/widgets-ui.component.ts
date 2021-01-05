import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss']
})
export class WidgetsUiComponent implements OnInit {

  cards = [
    { icon: 'fal fa-wifi fa-2x' ,title: 'Requests by day', detail: '', mount: '1.5k'},
    { icon: 'fal fa-users fa-2x' ,title: 'Client Flux', detail: '', mount: '15k'},
    { icon: 'fal fa-university fa-2x' ,title: 'Amount Bank', detail: '', mount: '12 M'},
    { icon: 'fad fa-people-carry fa-2x' ,title: 'Employee', detail: '', mount: '0.5k'},
  ];

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
