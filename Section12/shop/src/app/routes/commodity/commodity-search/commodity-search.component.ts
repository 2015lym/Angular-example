import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-commodity-search',
  templateUrl: './commodity-search.component.html',
  styles: []
})
export class CommoditySearchComponent implements OnInit {
  // 列表数据
  listData = [];
  title = '';

  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.getListData();
  }

  // 获取列表数据
  getListData() {
    let url;
    if (this.title == '') {
      url = 'http://localhost:3000/commodity';
    } else {
      url = 'http://localhost:3000/commodity?name=' + this.title;
    }
    this.http.get(url).subscribe((res: Array<Object>) => {
      this.listData = res;
    });
  }

  // 搜索
  search() {
    this.getListData();
  }

  // 重置
  reset() {
    this.title = '';
    this.getListData();
  }
}
