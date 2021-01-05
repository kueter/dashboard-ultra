import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public lservice: LayoutService) { }

  ngOnInit(): void {
  }

}
