import {AuthActionsConsts} from '../actions/auth.actions';

export interface State {
  isAuthorised: boolean;
}
const initialState: State = {
  isAuthorised: false
};

export function authReducer(state = initialState, action): State {
  switch (action.type) {
    case AuthActionsConsts.AuthLogin.Request:
      return {
        ...state
      };
    case AuthActionsConsts.AuthLogin.Success:
      return {
      ...state,
        isAuthorised: true
      };
    case AuthActionsConsts.AuthLogin.Failed:
      return {
        ...state,
        isAuthorised: false
      };
    case AuthActionsConsts.AuthLogin.Clear:
      return {
        ...state,
        isAuthorised: false
      };
    default:
      return {
        ...state
      };
  }
}
