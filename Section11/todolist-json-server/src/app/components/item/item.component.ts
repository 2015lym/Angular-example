import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  data: Object = {};

  @Output()
  checkItemEvent = new EventEmitter<Object>(); // 选项打钩事件
  @Output()
  editItemEvent = new EventEmitter<Object>(); // 编辑选项事件
  @Output()
  deleteItemEvent = new EventEmitter<Object>(); // 删除选项事件

  // 对话框
  confirmModal: NzModalRef;

  constructor(private modal: NzModalService) { }

  ngOnInit() { }

  // 选项打钩
  checkItem(): void {
    this.checkItemEvent.emit(this.data);
  }

  // 编辑选项
  editItem(): void {
    this.editItemEvent.emit(this.data);
  }

  // 删除选项
  deleteItem(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确定要删除吗？',
      nzOkText: '确定',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.deleteItemEvent.emit(this.data);
      }
    });
  }

}
