import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  // 手机号
  phoneNumber: string = '';
  // 电子邮箱
  email: string = '';

  // 日期选择
  date: string = '';
  // 生日
  birthday: string = '';


  constructor(private util: UtilsService) { }

  ngOnInit() {
  }

  // 验证手机号
  verifyPhoneNumber() {
    if (this.util.isMobilePhone(this.phoneNumber)) {
      console.log('这是正确的手机号');
    } else {
      console.log('这不是正确的手机号');
    }
  }

  // 验证电子邮箱
  verifyEmail() {
    if (this.util.isEmail(this.email)) {
      console.log('这是正确的电子邮箱');
    } else {
      console.log('这不是正确的电子邮箱');
    }
  }

  // 选择日期
  onChange() {
    this.birthday = this.date;
  }

  // 格式化日期
  changeDate() {
    this.birthday = this.util.formatDate(this.date);
  }
}
