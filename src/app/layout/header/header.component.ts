import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { LayoutService } from '../layout.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

  ocBox() {
    $("._chatbox").fadeIn()
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800);
  }


}
