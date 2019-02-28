import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  index: number; // index
  @Input()
  title: string; // 标题
  @Input()
  done: boolean; // 状态
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
    const data: Object = {
      index: this.index,
      title: this.title,
      done: this.done
    };
    this.checkItemEvent.emit(data);
  }

  // 编辑选项
  editItem() {
    const data: Object = {
      index: this.index,
      title: this.title,
      done: this.done
    };
    this.editItemEvent.emit(data);
  }

  // 删除选项
  deleteItem(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确定要删除吗？',
      nzOkText: '确定',
      nzCancelText: '取消',
      nzOnOk: () => {
        const data: Object = {
          index: this.index,
          done: this.done
        };
        this.deleteItemEvent.emit(data);
      }
    });
  }

}
