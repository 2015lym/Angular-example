import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styles: []
})
export class PersonDetailComponent implements OnInit {

  userInfo: Object = {};

  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.http.get('http://localhost:3000/user').subscribe((res) => {
      this.userInfo = res;
      console.log(this.userInfo);
    });
  }
}
