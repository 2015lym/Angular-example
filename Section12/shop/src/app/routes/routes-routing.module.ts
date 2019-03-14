import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
// 资产盘点
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGeneralComponent } from './dashboard/dashboard-general/dashboard-general.component';
import { DashboardEchartsComponent } from './dashboard/dashboard-echarts/dashboard-echarts.component';
// 商品管理
import { CommodityComponent } from './commodity/commodity.component';
import { CommoditySearchComponent } from './commodity/commodity-search/commodity-search.component';
import { CommodityEditComponent } from './commodity/commodity-edit/commodity-edit.component';
// 个人中心
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonSettingComponent } from './person/person-setting/person-setting.component';
// 消息管理
import { MessageComponent } from './message/message.component';
import { MessageNoticeComponent } from './message/message-notice/message-notice.component';
import { MessageReportComponent } from './message/message-report/message-report.component';
import { MessageFeedbackComponent } from './message/message-feedback/message-feedback.component';
// 个人中心
// 消息管理

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            component: DashboardGeneralComponent
          },
          {
            path: 'general',
            component: DashboardGeneralComponent
          },
          {
            path: 'echarts',
            component: DashboardEchartsComponent
          }
        ]
      },
      {
        path: 'commodity',
        component: CommodityComponent,
        children: [
          {
            path: '',
            component: CommoditySearchComponent
          },
          {
            path: 'edit',
            component: CommodityEditComponent
          },
          {
            path: 'search',
            component: CommoditySearchComponent
          }
        ]
      },
      {
        path: 'person',
        component: PersonComponent,
        children: [
          {
            path: '',
            component: PersonDetailComponent
          },
          {
            path: 'detail',
            component: PersonDetailComponent
          },
          {
            path: 'setting',
            component: PersonSettingComponent
          }
        ]
      },
      {
        path: 'message',
        component: MessageComponent,
        children: [
          {
            path: 'notice',
            component: MessageNoticeComponent
          },
          {
            path: 'report',
            component: MessageReportComponent
          },
          {
            path: 'feedback',
            component: MessageFeedbackComponent
          }
        ]
      },
      { path: 'exception', loadChildren: './exception/exception.module#ExceptionModule' },
    ]
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册', titleI18n: 'pro-register' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果', titleI18n: 'pro-register-result' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: false,
        scrollPositionRestoration: 'top',
      }
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule { }
