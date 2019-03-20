import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  // 设置日期格式
  public formatDate(date: string) {
    const time = new Date(date);
    const datetime = time.getFullYear() + '-' + this.formatDayAndMonth(time.getMonth() + 1) + '-' + this.formatDayAndMonth(time.getDate());
    return datetime;
  }

  // 格式化日月
  private formatDayAndMonth(val) {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  }

  // 手机号是否正确
  public isMobilePhone(value: string): boolean {
    let reg: RegExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return this.regVerify(value, reg);
  }

  // 邮箱是否正确
  public isEmail(value: string): boolean {
    let reg: RegExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return this.regVerify(value, reg);
  }

  // 正则表达式验证
  public regVerify(value: string, reg: RegExp): boolean {
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
  }
}
