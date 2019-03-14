import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { CommodityComponent } from './commodity/commodity.component';
import { PersonComponent } from './person/person.component';
import { MessageComponent } from './message/message.component';
import { CommoditySearchComponent } from './commodity/commodity-search/commodity-search.component';
import { CommodityEditComponent } from './commodity/commodity-edit/commodity-edit.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonSettingComponent } from './person/person-setting/person-setting.component';
import { MessageNoticeComponent } from './message/message-notice/message-notice.component';
import { MessageReportComponent } from './message/message-report/message-report.component';
import { MessageFeedbackComponent } from './message/message-feedback/message-feedback.component';
import { DashboardGeneralComponent } from './dashboard/dashboard-general/dashboard-general.component';
import { DashboardEchartsComponent } from './dashboard/dashboard-echarts/dashboard-echarts.component';

const COMPONENTS = [
  DashboardComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
];
const COMPONENTS_NOROUNT = [];
@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    CommodityComponent,
    PersonComponent,
    MessageComponent,
    CommoditySearchComponent,
    CommodityEditComponent,
    PersonDetailComponent,
    PersonSettingComponent,
    MessageNoticeComponent,
    MessageReportComponent,
    MessageFeedbackComponent,
    DashboardGeneralComponent,
    DashboardEchartsComponent
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class RoutesModule { }
