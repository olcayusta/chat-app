import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email]],
      password: [null],
    });
  }

  submit(): void {
    const { email, password } = this.form.value;

    this.loginService.login(email, password).subscribe((value) => {
      console.log(value);
    });
  }
}
