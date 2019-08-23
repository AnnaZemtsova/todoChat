import {createActions, createActionsType} from '../../utils/action.creator';

export  const USER_ACTIONS = ['UserCreate', 'UserFetch'];

export const UserActionsConsts: any = createActionsType(USER_ACTIONS);
export const UserActions: any = createActions(UserActionsConsts);
