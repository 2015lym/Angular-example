import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-commodity-edit',
  templateUrl: './commodity-edit.component.html',
  styles: []
})
export class CommodityEditComponent implements OnInit {
  validateForm: FormGroup;
  id: '';

  constructor(private fb: FormBuilder,
    private http: _HttpClient,
    private router: Router,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute) {
    this.validateForm = this.fb.group({
      id: [null],
      pId: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      salesVolume: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      inventory: [null, [Validators.required]],
      description: [null]
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams['id']) {
      this.id = this.activatedRoute.snapshot.queryParams['id'];
      let url = 'http://localhost:3000/commodity?id=' + this.id;
      this.http.get(url).subscribe((res: Array<Object>) => {
        this.validateForm.setValue({
          id: res[0]['id'],
          pId: res[0]['pId'],
          name: res[0]['name'],
          price: res[0]['price'],
          salesVolume: res[0]['salesVolume'],
          inventory: res[0]['inventory'],
          description: res[0]['description'] || ''
        });
      });
    } else {
      this.id = '';
      this.validateForm.setValue({
        id: '',
        pId: '',
        name: '',
        price: '',
        salesVolume: '',
        inventory: '',
        description: ''
      });
    }
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
    if (this.id == '') {
      this.http.post('http://localhost:3000/commodity', params).subscribe((res) => {
        this.message.success('添加成功');
        this.router.navigate(['/commodity/search']);
      });
    } else {
      this.http.put('http://localhost:3000/commodity/' + this.id, params).subscribe((res) => {
        this.message.success('编辑成功');
        this.router.navigate(['/commodity/search']);
      });
    }
  }

}
