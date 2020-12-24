import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ultra';
  boot = false;


  ngOnInit(): void {

    setTimeout(() => {
      this.boot = true;
      $(".cp_load").fadeIn().animate({ height: '0px' });
    }, 2500);

  }
}
