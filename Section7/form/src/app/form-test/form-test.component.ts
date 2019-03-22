import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  validateForm: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nickname: [null, [Validators.required, Validators.maxLength(6)]],
      birthday: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/)]]
    });
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
    this.setDate('birthday');
    params['birthday'] = this.validateForm.get('birthday').value;
    console.log(params);
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
