import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = new UserService();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('成功获取用户信息', () => {
    console.log(userService.getUserInfo());
    expect(userService.getUserInfo()).toBeDefined();
  });


  it('用户手机号是否合法', () => {
    console.log(userService.getUserInfo());
    expect(userService.getUserInfo()).toBeDefined();
  });

});
