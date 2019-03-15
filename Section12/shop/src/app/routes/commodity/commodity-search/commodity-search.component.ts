import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzModalRef, NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-commodity-search',
  templateUrl: './commodity-search.component.html',
  styles: []
})
export class CommoditySearchComponent implements OnInit {
  // 列表数据
  listData = [];
  title = '';
  // 对话框
  confirmModal: NzModalRef;

  constructor(private http: _HttpClient,
    private message: NzMessageService,
    private modal: NzModalService) { }

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

  // 编辑
  edit() {

  }

  // 删除
  delete(data) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确定要删除吗？',
      nzOkText: '确定',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.http.delete('http://localhost:3000/commodity/' + data['id']).subscribe((res) => {
          this.message.success('删除成功');
          this.reset();
        });
      }
    });
  }
}
