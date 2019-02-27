import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input()
  modalTitle: string; // 模态框的标题
  @Input()
  isVisible = false; // 是否显示模态窗
  @Output()
  isVisibleChange = new EventEmitter(); // dialog显示状态改变事件
  @Output()
  clickEvent = new EventEmitter<string>();

  title: string = '';
  date: string = '';
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(15)]],
      date: [null, [Validators.required]]
    });
  }

  handleOk(): void {
    this.submitForm();
  }

  handleCancel(): void {
    this.clickEvent.emit('点击取消');
    this.isVisibleChange.emit(false);
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (!(this.validateForm.controls[i].status == 'VALID') && this.validateForm.controls[i].status !== 'DISABLED') {
        return;
      }
    }
    this.clickEvent.emit('点击确定');
    this.isVisibleChange.emit(false);
  }
}
