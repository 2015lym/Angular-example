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
  clickEvent = new EventEmitter<Object>();

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
    let params = {};
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (!(this.validateForm.controls[i].status == 'VALID') && this.validateForm.controls[i].status !== 'DISABLED') {
        return;
      }
      if (this.validateForm.controls[i] && this.validateForm.controls[i].value) {
        params[i] = this.validateForm.controls[i].value;
      } else {
        params[i] = '';
      }
    }
    this.setDate('date'); // 颁布日期
    params['date'] = this.validateForm.get('date').value;
    this.clickEvent.emit(params);
    this.isVisibleChange.emit(false);
  }

  // 设置日期格式
  setDate(dates) {
    const time = new Date(this.validateForm.get(dates).value);
    const datetime = time.getFullYear() + '-' + this.formatDayAndMonth(time.getMonth() + 1) + '-' + this.formatDayAndMonth(time.getDate());
    this.validateForm.get(dates).setValue(datetime);
  }

  formatDayAndMonth(val) {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  }
}
