import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  form: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3), Validators.email]
      }),

      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      })
    });
  }

  onLogin() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    this.authService.loginUser(this.form.value.email, this.form.value.password);
  }

}
