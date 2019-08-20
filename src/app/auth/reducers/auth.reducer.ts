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
      return {
        ...state
      };
    case AuthAction.AUTH_SUCCESS:
      return {
      ...state
      };
    case AuthAction.AUTH_FAILED:
      return {
        ...state
      };
    case AuthAction.AUTH_CLEAR:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
