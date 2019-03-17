import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';

/**
 * 菜单通知
 */
@Component({
  selector: 'header-notify',
  template: `
  <notice-icon
    [data]="data"
    [count]="count"
    [loading]="loading"
    btnClass="alain-default__nav-item"
    btnIconClass="alain-default__nav-item-icon"
    (select)="select($event)"
    (clear)="clear($event)"
    (popoverVisibleChange)="loadData()"></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNotifyComponent {
  data: NoticeItem[] = [
    {
      title: '通知',
      list: [],
      emptyText: '无',
      clearText: '清空消息',
    },
    {
      title: '举报',
      list: [],
      emptyText: '无',
      clearText: '清空消息',
    },
    {
      title: '待办',
      list: [],
      emptyText: '无',
      clearText: '清空消息',
    },
  ];
  count = 5;
  loading = false;

  constructor(private msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  private updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(i => (i.list = []));

    notices.forEach(item => {
      const newItem = { ...item };
      if (newItem.datetime)
        newItem.datetime = distanceInWordsToNow(item.datetime, {
          locale: (window as any).__locale__,
        });
      if (newItem.extra && newItem.status) {
        newItem.color = {
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newItem.status];
      }
      data.find(w => w.title === newItem.type).list.push(newItem);
    });
    return data;
  }

  loadData() {
    if (this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.data = this.updateNoticeData([
        {
          id: '000000001',
          title: '手机货物不足，请及时补货',
          datetime: '2019-03-09',
          type: '通知',
        },
        {
          id: '000000002',
          title: '本周周末加班',
          datetime: '2019-03-09',
          type: '通知',
        },
        {
          id: '000000003',
          title: '张三的举报',
          description: '举报举报举报举报举报举报',
          datetime: '2019-03-09',
          type: '举报',
        },
        {
          id: '000000004',
          title: '李四的举报',
          description: '举报举报举报举报举报举报',
          datetime: '2019-03-09',
          type: '举报',
        },
        {
          id: '000000005',
          title: '全部收收',
          description: '任务需要在 2019-04-09 20:00 前启动',
          extra: '未开始',
          status: 'todo',
          type: '待办',
        },
        {
          id: '000000006',
          title: '下个月前销售额必须翻倍',
          description:
            '2019-03-01',
          extra: '进行中',
          status: 'urgent',
          type: '待办',
        },
      ]);
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  clear(type: string) {
    this.msg.success(`清空了 ${type}`);
  }

  select(res: any) {
    this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
  }
}
