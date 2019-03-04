import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // 列表数据
  listData = [];
  // 编辑数据
  editData = {};
  // 模态窗显示
  modalIsVisible: boolean = false;
  // 对话框
  confirmModal: NzModalRef;

  constructor(private http: HttpClient, private modal: NzModalService) { }

  ngOnInit() {
    this.getListData();
  }

  // 获取列表数据
  getListData() {
    this.http.get('http://localhost:3000/users').subscribe((res: Array<Object>) => {
      this.listData = res;
    });
  }

  // 新增
  addPeople() {
    this.editData = {};
    this.modalIsVisible = true;
  }

  // 编辑
  edit(data: Object) {
    this.editData = data;
    this.modalIsVisible = true;
  }

  // 删除
  delete(data: Object) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确定要删除吗？',
      nzOkText: '确定',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.http.delete('http://localhost:3000/users/' + data['id']).subscribe((res) => {
          this.getListData();
        });
      }
    });
  }

  // 新增、编辑完成的回调
  clickEvent() {
    this.getListData();
  }
}
