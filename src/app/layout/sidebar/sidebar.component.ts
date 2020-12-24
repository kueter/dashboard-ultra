import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() side: boolean = true;


  extraParameter: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

    // console.log(this.extraParameter);

    console.log(localStorage.getItem('state'));
  }




}
