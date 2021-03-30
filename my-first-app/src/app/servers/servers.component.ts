import { Component, OnInit } from '@angular/core';

@Component({
  /*
    Regular selector
    selector: 'app-servers'
  */

  /*
   selector as attribute
   selector: '[app-servers]',
  */

  // selector as class attribute
  selector: '.app-servers',
  template: `<app-server></app-server>
            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
