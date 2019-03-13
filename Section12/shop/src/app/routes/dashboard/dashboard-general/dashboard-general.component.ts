import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styles: []
})
export class DashboardGeneralComponent implements OnInit {
  // 头部数据
  baseData = {};
  // 列表数据
  listData = [];
  // 详细说明
  mapOfExpandData = {};
  // 排序名
  sortName = null;
  // 排序值
  sortValue = null;

  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.getBaseData();
    this.getListData();
  }

  // 获取顶部数据
  getBaseData() {
    this.http.get('http://localhost:3000/inventorLists').subscribe((res) => {
      this.baseData = res;
    });
  }

  // 获取列表数据
  getListData() {
    this.http.get('http://localhost:3000/commodity').subscribe((res: Array<Object>) => {
      this.listData = res;
    });
  }

  // 排序
  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  // 搜索
  search(): void {
    const data = [...this.listData];
    if (this.sortName && this.sortValue) {
      // tslint:disable-next-line:max-line-length
      this.listData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
      console.log(this.listData);
    } else {
      this.listData = this.listData;
    }
  }

}
