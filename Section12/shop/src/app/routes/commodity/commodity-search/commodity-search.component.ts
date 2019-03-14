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

  constructor(private http: _HttpClient) { }

  ngOnInit() {
    this.getListData();
  }

  // 获取列表数据
  getListData() {
    this.http.get('http://localhost:3000/commodity').subscribe((res: Array<Object>) => {
      this.listData = res;
    });
  }
}
