
import {createActions, createActionsType} from '../../utils/action.creator';

export  const TODOS_ACTIONS = ['TodoUpdate', 'TodoAdd', 'TodoSetItems',
  'TodoGetItems', 'TodoRemove', 'TodoAdd'];

export const TodoActionsConsts: any = createActionsType(TODOS_ACTIONS);
export const TodoActions: any = createActions(TodoActionsConsts);
