import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { EditTripComponent } from './components/edit-trip/edit-trip.component';
import { AuthModule } from './auth/auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    TripListComponent,
    TripDetailsComponent,
    AddTripComponent,
    EditTripComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
