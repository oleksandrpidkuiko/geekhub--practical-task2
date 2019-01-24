import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  form: FormGroup;
  nameRegEx = /[a-z] /gi;
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  name: string;
  phone: string;
  email: string;
  password: string;

  constructor(private formuBilder: FormBuilder) {
}

  ngOnInit() {
    this.form = this.formuBilder.group({
      name: [null, [Validators.required, Validators.pattern(this.nameRegEx)]],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegEx)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegEx)]],
    });
   this.form.controls.name.valueChanges.subscribe((data) => {
      console.log(data);
      this.name = data;
    });
    this.form.controls.phone.valueChanges.subscribe((data) => {
      this.phone = data;
    });
    this.form.controls.email.valueChanges.subscribe((data) => {
      this.email = data;
    });
    this.form.controls.password.valueChanges.subscribe((data) => {
      this.password = data;
    });
  }
}
