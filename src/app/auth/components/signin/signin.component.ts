import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import * as fromAuth from '../../../auth/reducers/auth.reducer';
import {AuthActions} from '../../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private store: Store<fromAuth.State>) { }
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }
  signin(): void {
      const email = this.userForm.value['email'];
      const password = this.userForm.value['password'];
      this.store.dispatch(AuthActions.AuthLogin.Request({email, password}));
  }

}
