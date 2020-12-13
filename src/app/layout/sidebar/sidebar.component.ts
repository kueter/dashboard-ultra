import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideState = false;
  @Output() side = new EventEmitter();

  extraParameter: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
  }

  toggleSideBar() {
    this.sideState = !this.sideState;
    this.side.emit(this.sideState);
  }
}
