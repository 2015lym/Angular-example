import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-echarts',
  templateUrl: './dashboard-echarts.component.html',
  styles: []
})
export class DashboardEchartsComponent implements OnInit {

  // 柱状图数据
  salesData = [];
  // 饼状图总额
  total: number = 0;
  // 饼状图数据
  salesPieData = [];

  constructor(private http: _HttpClient) { }

  ngOnInit(): void {
    this.getChartsData();
  }

  // 获取数据
  getChartsData() {
    this.salesData = [];
    this.salesPieData = [];
    this.total = 0;
    this.http.get('http://localhost:3000/echarts').subscribe((res) => {
      const data = res;
      let array = [];
      for (let i = 0; i < 12; i++) {
        const value = data['bar'][i];
        array.push({ x: `${i + 1}月`, y: value });
      }
      this.salesData = array;
      for (let j = 0; j < data['pie'].length; j++) {
        const obj = data['pie'][j];
        this.salesPieData.push({ x: obj['x'], y: obj['y'], });
        this.total += obj['y'];
      }
    });
  }

}
