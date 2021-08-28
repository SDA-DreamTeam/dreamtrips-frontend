import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  isLogin: boolean = false
  addCountryForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }
    

  ngOnInit(): void {
    this.addCountryForm = this.formBuilder.group({
      countryName: ['', Validators.required],
    
  });
}
get f() { return this.addCountryForm.controls; }

onSubmit(form: NgForm) {
  console.log(form.value)
  let json = {'name': form.value['countryName']}
  this.api.postTypeRequest('countries', json).subscribe((res: any) => {
    this.router.navigate(['/']);
  }, err => {
    this.errorMessage = err['error'].message;
   
  });
}
isUserLogin() {
  if (this.auth.getUserDetails() != null) {
    this.isLogin = true;
  }
}





}
