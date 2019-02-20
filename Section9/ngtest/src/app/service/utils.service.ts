import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getUserName(): string {
    if (localStorage.getItem('username')) {
      return localStorage.getItem('username');
    } else {
      return '匿名用户';
    }
  }

  validateMobile(mobile: string): boolean {
    if (!(/(^(13\\d|15[^4,\\D]|17[135678]|18\\d)\\d{8}|170[^346,\\D]\\d{7})$/.test(mobile))) {
      return true;
    } else {
      return false;
    }
  }
}
