import {STORE_ACTIONS} from '../core/consts';
import {AUTH_ACTIONS} from '../auth/actions';
import {USER_ACTIONS} from '../user/actions';
import {TODOS_ACTIONS} from '../todoList/actions';



export const getConsts = (): string[] => {
  const constants: string[] = [];
  STORE_ACTIONS.forEach(next => {
    AUTH_ACTIONS.forEach(next2 => {
      const type = next2 + '_' + next;
      constants.push(type);
    });
    USER_ACTIONS.forEach(next2 => {
      const type = next2 + '_' + next;
      constants.push(type);
    });
    TODOS_ACTIONS.forEach(next2 => {
      const type = next2 + '_' + next;
      constants.push(type);
    });
  });
  return constants;
};

export const getActions = (consts: string[]) => {
  const actions: {} = {};
  consts.forEach(next => {
    actions[next] = (next, payload, callback, options) => {
      return {next, payload, callback, options};
    };
  });
  return actions;
};


// STORE_ACTIONS.forEach(next => {
//   consts[next] = {};
//
//   AUTH_ACTIONS.forEach(next2 => {
//     const type = next + '_' + next2;
//     consts[next][next2] = (type, payload, callback, options) => {
//       return {type, payload, callback, options};
//     };
//   });
//
//   USER_ACTIONS.forEach(next2 => {
//     const type = next + '_' + next2;
//     consts[next][next2] = (type, payload, callback, options) => {
//       return {type, payload, callback, options};
//     };
//   });
//
//
//   TODOS_ACTIONS.forEach(next2 => {
//     const type = next + '_' + next2;
//     consts[next][next2] = (type, payload, callback, options) => {
//       return {type, payload, callback, options};
//     };
//   });
// });


