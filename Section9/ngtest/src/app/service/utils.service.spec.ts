import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let utilsService: UtilsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    utilsService = new UtilsService();
  });

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  it('成功获取用户名', () => {
    console.log(utilsService.getUserName());
    expect(utilsService.getUserName()).toBeDefined();
  });

  it('手机号是否合法', () => {
    console.log(utilsService.validateMobile('18622223333'));
    expect(utilsService.validateMobile('18622223333')).toBeTruthy();
  });
});
