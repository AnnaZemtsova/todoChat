import {NgModule} from '@angular/core';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {SigninComponent} from './auth/components/signin/signin.component';
import {SignupComponent} from './auth/components/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/guards/AuthGuard';
const routes: Routes = [
  {path: 'signin', component: SigninComponent },
  {path : '', component : HomeComponent, canActivate: [AuthGuard]},
  {path : 'home', component : HomeComponent, canActivate: [AuthGuard]},
  {path : 'signup', component : SignupComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
