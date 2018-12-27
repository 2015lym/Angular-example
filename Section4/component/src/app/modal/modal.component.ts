import { Component, OnInit, Input } from '@angular/core';

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
  cancleText: string; // 取消按钮文本
  @Input()
  isVisible = false;

  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
