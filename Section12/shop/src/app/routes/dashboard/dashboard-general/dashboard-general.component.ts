import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styles: []
})
export class DashboardGeneralComponent implements OnInit {

  constructor(private http: _HttpClient) { }

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

}
