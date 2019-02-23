import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  passowrd = '';
  remember = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`账号：${this.username} 密码：${this.passowrd} 记住密码：${this.remember}`);
    this.router.navigate(['/home']);
  }
}
