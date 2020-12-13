import { Component, OnInit } from '@angular/core';

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
    }, 500);

  }
}
