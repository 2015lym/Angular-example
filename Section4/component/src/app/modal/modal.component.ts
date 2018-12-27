import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  title: string; // 模态框的标题
  @Input()
  content: string; // 模态框的内容
  @Input()
  okText: string; // 确定按钮文本
  @Input()
  cancelText: string; // 取消按钮文本
  @Input()
  isVisible = false;
  @Output()
  isVisibleChange = new EventEmitter(); // dialog显示状态改变事件
  @Output()
  clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    this.clickEvent.emit('点击确定');
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.clickEvent.emit('点击取消');
    this.isVisibleChange.emit(false);
  }
}
