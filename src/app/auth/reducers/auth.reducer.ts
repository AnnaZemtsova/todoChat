import * as AuthAction from '../actions/auth.actions';

export interface State {
  isAuthorised: boolean;
}
const initialState: State = {
  isAuthorised: false
};

export function authReducer(state = initialState, action: AuthAction.AuthActions): State {
  switch (action.type) {
    case AuthAction.AUTH_REQUEST:
      break;
    case AuthAction.AUTH_SUCCESS:
      break;

    case AuthAction.AUTH_FAILED:
      break;

    case AuthAction.AUTH_CLEAR:
      break;
    default:
      return {
        ...state
      };
  }
}
