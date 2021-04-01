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
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created...!'
  serverName: string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  getAllowNewServer () {
    return this.allowNewServer;
  }

  onCreateServer () {
    this.serverCreationStatus = 'Server was create successfully...!'
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerName () {
    return this.serverName;
  }

}
