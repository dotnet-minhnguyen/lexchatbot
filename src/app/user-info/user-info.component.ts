import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnChanges {

  @Input() user = {};
  userInfoStr: string;

  constructor() { }

  ngOnChanges() {
    this.userInfoStr = JSON.stringify(this.user, undefined, 2);
  }

}
