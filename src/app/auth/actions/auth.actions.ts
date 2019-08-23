
import {createActions, createActionsType} from '../../utils/action.creator';

export  const AUTH_ACTIONS = ['AuthLogin'];

export const AuthActionsConsts: any = createActionsType(AUTH_ACTIONS);
export const AuthActions: any = createActions(AuthActionsConsts);
