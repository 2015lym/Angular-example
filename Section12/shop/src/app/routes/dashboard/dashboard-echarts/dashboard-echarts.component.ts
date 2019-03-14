import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-echarts',
  templateUrl: './dashboard-echarts.component.html',
  styleUrls: ['./dashboard-echarts.component.less']
})
export class DashboardEchartsComponent implements OnInit {

  chartData: any[] = [];
  constructor(private http: _HttpClient) { }


  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        x: (new Date().getTime()) + (1000 * 60 * 30 * i),
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
  salesData: any[] = new Array(12).fill({}).map((i, idx) => ({
    x: `${idx + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  }));
}
