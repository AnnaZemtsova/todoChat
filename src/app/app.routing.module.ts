import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {path : '', component : HomeComponent},
  {path : 'signup', component : SignupComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
