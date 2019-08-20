import {SigninComponent} from '../auth/components/signin/signin.component';

export enum API_URLS {
  SIGNUP = 'signup',
  SIGNIN = 'signin'
}

export const ROUTES  = {
  HOME: {
    path: 'home',
    component: SigninComponent
  },
  SIGNIN: {
    path: 'signin',
    component: SigninComponent
  },
  SIGNUP: {
    path: 'signup',
    component: SigninComponent
  },
};
