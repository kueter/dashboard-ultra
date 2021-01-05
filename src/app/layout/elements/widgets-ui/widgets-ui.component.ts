import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-widgets-ui',
  templateUrl: './widgets-ui.component.html',
  styleUrls: ['./widgets-ui.component.scss']
})
export class WidgetsUiComponent implements OnInit {

  cards = [
    {title: '', detail: '', count: ''},
    {title: '', detail: '', count: ''},
    {title: '', detail: '', count: ''},
    {title: '', detail: '', count: ''},
  ];

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
