import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-person-setting',
  templateUrl: './person-setting.component.html',
  styles: []
})
export class PersonSettingComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private http: _HttpClient,
    private router: Router,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute) {
    this.validateForm = this.fb.group({
      avatar: [null, [Validators.required]],
      username: [null, [Validators.required]],
      status: [null, [Validators.required]],
      sign: [null]
    });
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/user').subscribe((res) => {
      this.validateForm.setValue({
        avatar: res['avatar'],
        username: res['username'],
        status: res['status'],
        sign: res['sign'] || ''
      });
    });
  }

  submitForm() {
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
    this.http.put('http://localhost:3000/user/', params).subscribe((res) => {
      this.message.success('修改成功');
      this.router.navigate(['/person/detail']);
    });
  }
}
