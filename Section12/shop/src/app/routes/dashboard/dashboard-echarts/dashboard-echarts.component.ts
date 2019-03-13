import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { STColumn } from '@delon/abc';
import { getTimeDistance } from '@delon/util';
import { _HttpClient } from '@delon/theme';
import { yuan } from '@shared';

@Component({
  selector: 'app-dashboard-echarts',
  templateUrl: './dashboard-echarts.component.html',
  styleUrls: ['./dashboard-echarts.component.less']
})
export class DashboardEchartsComponent implements OnInit {
  data: any = {};
  loading = true;
  date_range: Date[] = [];
  rankingListData: any[] = Array(7)
    .fill({})
    .map((item, i) => {
      return {
        title: '工专路 ${i} 号店',
        total: 323234,
      };
    });
  titleMap = {
    y1: '客流量',
    y2: '支付笔数',
  };
  searchColumn: STColumn[] = [
    { title: '排名', i18n: 'app.analysis.table.rank', index: 'index' },
    {
      title: '搜索关键词',
      i18n: 'app.analysis.table.search-keyword',
      index: 'keyword',
      click: (item: any) => this.msg.success(item.keyword),
    },
    {
      type: 'number',
      title: '用户数',
      i18n: 'app.analysis.table.users',
      index: 'count',
      sorter: (a, b) => a.count - b.count,
    },
    {
      type: 'number',
      title: '周涨幅',
      i18n: 'app.analysis.table.weekly-range',
      index: 'range',
      render: 'range',
      sorter: (a, b) => a.range - b.range,
    },
  ];

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    // this.http.get('/chart').subscribe((res: any) => {
    //   res.offlineData.forEach((item: any, idx: number) => {
    //     item.show = idx === 0;
    //     item.chart = Object.assign([], res.offlineChartData);
    //   });
    //   this.data = res;
    //   this.loading = false;
    //   this.changeSaleType();
    // });
  }

  setDate(type: any) {
    this.date_range = getTimeDistance(type);
    setTimeout(() => this.cdr.detectChanges());
  }

  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;
  changeSaleType() {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
          ? this.data.salesTypeDataOnline
          : this.data.salesTypeDataOffline;
    if (this.salesPieData) {
      this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
    }
    this.cdr.detectChanges();
  }

  handlePieValueFormat(value: any) {
    return yuan(value);
  }

  saleTabs: any[] = [
    { key: 'sales', show: true },
    { key: 'visits' },
  ];
  salesChange(idx: number) {
    if (this.saleTabs[idx].show !== true) {
      this.saleTabs[idx].show = true;
      this.cdr.detectChanges();
    }
  }

  offlineIdx = 0;
  offlineChange(idx: number) {
    if (this.data.offlineData[idx].show !== true) {
      this.data.offlineData[idx].show = true;
      this.cdr.detectChanges();
    }
  }
}