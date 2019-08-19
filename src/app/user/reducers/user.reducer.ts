import {User} from '../models/user';
import * as UserAction from '../actions/user.actions';

export interface State {
  user: User;
}
const initialState: State = {
  user: null
};

export function userReducer(state = initialState, action: UserAction.UserActions): State {
  switch (action.type) {
    case UserAction.USER_CREATE_REQUEST:
      return {
        ...state
      };
    case UserAction.USER_FETCH_SUCCESS:
      break;

    case UserAction.USER_FETCH_FAILED:
      break;
    case UserAction.USER_CLEAR:
      break;
    default:
      return {
        ...state
      };
  }
}
