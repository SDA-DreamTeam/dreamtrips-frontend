import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { EditTripComponent } from './components/edit-trip/edit-trip.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripListComponent } from './components/trip-list/trip-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'trip-list',
    component: TripListComponent
  },
  {
    path: 'trip-details',
    component: TripDetailsComponent
  },
  {
    path: 'add-trip',
    component: AddTripComponent
  },
  {
    path: 'edit-trip/:id',
    component: EditTripComponent
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
