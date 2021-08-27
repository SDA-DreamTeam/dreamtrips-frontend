import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false

  errorMessage

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {
    this.api.postTypeRequest('sign-in', form.value).subscribe((res: any) => {
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
