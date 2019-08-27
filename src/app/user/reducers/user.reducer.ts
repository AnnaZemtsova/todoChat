import {User} from '../models/user';
import {UserActionsConsts} from '../actions/user.actions';

export interface State {
  user: User;
}
const initialState: State = {
  user: null
};

export function userReducer(state = initialState, action): State {
  switch (action.type) {
    case UserActionsConsts.UserCreate.Request:
      return {
        ...state
      };
    case UserActionsConsts.UserFetch.Success:
      break;

    case UserActionsConsts.UserFetch.Request:
      break;

    case UserActionsConsts.UserCreate.Success:
      const gotUser: User = JSON.parse(action.payload.user);
      return {
        ...state,
        user: gotUser
      };

    case UserActionsConsts.UserCreate.Faild:
      break;

    case UserActionsConsts.UserFetch.Failed:
      break;
    default:
      return {
        ...state
      };
  }
}
