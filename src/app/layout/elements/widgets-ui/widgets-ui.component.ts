import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss']
})
export class WidgetsUiComponent implements OnInit {

  cards = [
    { icon: '' ,title: 'Requests by day', detail: '', mount: '1.5k'},
    { icon: 'fal fa-users' ,title: 'Client Flux', detail: '', mount: '15k'},
    { icon: 'fal fa-university' ,title: 'Amount Bank', detail: '', mount: '12 M'},
    { icon: 'fal fa-peapole-carry' ,title: 'Employee', detail: '', mount: '0.5k'},
  ];

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
