import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  passowrd: string = '';
  remember: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(`账号：${this.username} 密码：${this.passowrd} 记住密码：${this.remember}`);
  }
}
