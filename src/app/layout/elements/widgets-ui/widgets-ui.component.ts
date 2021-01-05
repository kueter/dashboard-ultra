import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss']
})
export class WidgetsUiComponent implements OnInit {

  cards = [
    { icon:'' ,title: 'All Requests', detail: '', mount: ''},
    { icon:'' ,title: 'Client Flux', detail: '', mount: ''},
    { icon:'' ,title: 'Amount Bank', detail: '', mount: ''},
    { icon:'' ,title: 'Employee', detail: '', mount: ''},
  ];

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
