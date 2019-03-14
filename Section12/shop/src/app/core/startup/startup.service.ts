import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(resolve: any, reject: any) {
    zip(
      this.httpClient.get('assets/tmp/app-data.json')
    ).pipe(
      // 接收其他拦截器后产生的异常消息
      catchError(([appData]) => {
        resolve(null);
        return [appData];
      })
    ).subscribe(([appData]) => {

      // application data
      const res: any = appData;
      // 应用信息：包括站点名、描述、年份
      this.settingService.setApp(res.app);
      // 用户信息：包括姓名、头像、邮箱地址
      this.settingService.setUser(res.user);
      // ACL：设置权限为全量
      this.aclService.setFull(true);
      // 初始化菜单
      this.menuService.add(res.menu);
      // 设置页面标题的后缀
      this.titleService.suffix = res.app.name;
    },
      () => { },
      () => {
        resolve(null);
      });
  }

  private viaMock(resolve: any, reject: any) {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   resolve({});
    //   return;
    // }
    // mock
    const app: any = {
      name: `ng-alain`,
      description: `Ng-zorro admin panel front-end framework`
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // 应用信息：包括站点名、描述、年份
    this.settingService.setApp(app);
    // 用户信息：包括姓名、头像、邮箱地址
    this.settingService.setUser(user);
    // ACL：设置权限为全量
    this.aclService.setFull(true);
    // 初始化菜单
    this.menuService.add([
      {
        text: '主导航',
        group: true,
        children: [
          {
            text: '资产盘点',
            link: '/dashboard',
            icon: { type: 'icon', value: 'anticon-dashboard' },
            children: [
              {
                text: '资产概况',
                link: '/dashboard/general',
              },
              {
                text: '交易数据分析',
                link: '/dashboard/echarts',
              }
            ]
          },
          {
            text: '商品管理',
            link: '/commodity',
            icon: { type: 'icon', value: 'appstore' },
            children: [
              {
                text: '商品查询',
                link: '/commodity/search',
              },
              {
                text: '商品添加/编辑',
                link: '/commodity/edit',
              }
            ]
          },
          {
            text: '个人中心',
            link: '/person',
            icon: { type: 'icon', value: 'anticon-user' },
            children: [
              {
                text: '个人资料查看',
                link: '/person/detail',
              },
              {
                text: '个人资料设置',
                link: '/person/setting',
              }
            ]
          },
          {
            text: '消息管理',
            link: '/message',
            icon: { type: 'icon', value: 'anticon-cloud' },
            children: [
              {
                text: '通知消息管理',
                link: '/message/notice',
              },
              {
                text: '举报消息管理',
                link: '/message/report',
              },
              {
                text: '意见反馈管理',
                link: '/message/feedback',
              }
            ]
          }
        ]
      }
    ]);
    // 设置页面标题的后缀
    this.titleService.suffix = app.name;

    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMock(resolve, reject);

    });
  }
}
