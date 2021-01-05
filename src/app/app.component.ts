import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ultra';
  boot = false;

  constructor(private storage: StorageMap) {

  }

  ngOnInit(): void {
    this.storage.get('boot').subscribe(
      (_) => {
        if (_ != undefined) {
          this.boot = true;
        }
      }
    );

    setTimeout(() => {
      this.boot = true;
      this.storage.set('boot',this.boot).subscribe();
      $(".cp_load").animate({ height: '0px' });
    }, 2500);

  }


}
