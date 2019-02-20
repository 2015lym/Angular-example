import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  status = '停用';

  constructor() { }

  ngOnInit() { }

  changeStatus() {
    if (this.status = '停用') {
      this.status = '正常';
    } else {
      this.status = '停用';
    }
  }
}
