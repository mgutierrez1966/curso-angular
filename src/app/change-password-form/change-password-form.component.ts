import { PasswordValidator } from './password-validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent  {

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['', [Validators.required], [PasswordValidator.oldPasswordValid]],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  log(value) {
    console.log(value)
  }
}
