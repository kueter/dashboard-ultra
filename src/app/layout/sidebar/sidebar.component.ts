import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { layDb } from '../layout.database';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  bgcolor: any;

  constructor(public lservice: LayoutService) {
    layDb.sbarcolors.toArray().then(_=> {
      console.log(_);
      this.bgcolor = _[0].color
    });
  }

  ngOnInit(): void {
    // this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

    // console.log(this.extraParameter);

  }




}
