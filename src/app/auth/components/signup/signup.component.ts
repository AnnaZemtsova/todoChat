import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromUser from '../../../user/reducers/user.reducer';
import {UserActions} from '../../../user/actions/user.actions';
import {User} from '../../../user/models/user';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private store: Store<fromUser.State>,
              private http: HttpClient) { }
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      confirmPassword: new FormControl(null)
    });
  }
  signup(): void {
    const user: User = {
      name: this.userForm.value['name'],
      email: this.userForm.value['email'],
      password: this.userForm.value['password']
    };

    this.store.dispatch( UserActions.UserCreate.Request(user));
  }

}
