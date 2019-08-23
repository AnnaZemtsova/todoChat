const STORE_ACTIONS = ['Success', 'Request', 'Failed', 'Clear'];

export const createActionsType = (actionsConsts): {} => {
  const constants: {} = {};
  actionsConsts.forEach(next => {
    constants[next] =  {};
    STORE_ACTIONS.forEach(next2 => {
      constants[next][next2] = '[' + next + '] ' + next2;
    });
  });
  return constants;
};

export const createActions = (consts: {}) => {
  const actions: {} = {};
  for (const key in consts) {
    actions[key] = {};
    for (const keyInner in consts[key]) {
      const type = '[' + key + '] ' + keyInner;
      actions[key][keyInner] = (payload, callback, options) => {
        return {type, payload, callback, options};
      };
    }
  }
  return actions;
};



