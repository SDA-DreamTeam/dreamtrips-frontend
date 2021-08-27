import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLogin: boolean = false
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.api.postTypeRequest('registration', form.value).subscribe((res: any) => {
      if (res.token) {
        this.auth.setDataInLocalStorage('token', res.token);
        this.api.getTypeRequest('profile').subscribe((res: any) => {
          this.auth.setDataInLocalStorage('userData', JSON.stringify(res));
          this.auth.send();
          this.router.navigate(['/']);
        });
      } else {
        this.auth.send();
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin() {
    if (this.auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  getUsername() {
    return this.auth.getUserDetails()['username'];
  }

  logout() {
    this.auth.clearStorage()
    this.auth.send();
    this.router.navigate(['']);
  }

}
