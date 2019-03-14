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

  search(): void {
    // const filterFunc = (item: { name: string, age: number, address: string }) => {
    //   return (this.listOfSearchAddress.length ? this.listOfSearchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
    //     (item.name.indexOf(this.searchValue) !== -1);
    // };
    // const data = this.listOfData.filter((item: { name: string, age: number, address: string }) => filterFunc(item));
    // // @ts-ignore
    // this.listOfDisplayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName! ] > b[ this.sortName! ] ? 1 : -1) : (b[ this.sortName! ] > a[ this.sortName! ] ? 1 : -1));
  }
}
