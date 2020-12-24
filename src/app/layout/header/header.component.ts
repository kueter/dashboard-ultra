import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sideState = false;
  @Output() side = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ocBox() {
    $("._chatbox").fadeIn()
      .css({ bottom: '1%',right:'1%', position: 'fixed' })
      .animate({ height: '350px' }, 800);
  }


  toggleSideBar() {
    this.sideState = !this.sideState;
    this.side.emit(this.sideState);
  }


}
