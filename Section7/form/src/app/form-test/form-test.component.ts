import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


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
      phoneNumber: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
