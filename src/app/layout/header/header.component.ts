import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sibState: boolean;

  constructor(public lservice: LayoutService) {
    this.sibState = JSON.parse(localStorage.getItem('state'));
    console.log(this.sibState);
  }

  ngOnInit(): void {
  }


  setState() {
    this.sibState = !this.sibState;
    this.lservice.layoutState.next(this.sibState);
    localStorage.setItem('state',JSON.stringify(this.sibState));
  }

  auth() {

  }


}
