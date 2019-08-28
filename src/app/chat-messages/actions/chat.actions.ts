
import {createActions, createActionsType} from '../../utils/action.creator';

export  const CHAT_ACTIONS = ['GetMessage', 'SetMessages', 'SendMessage', 'AddMessage', 'GetMessages', 'CreateRoom', 'SetRooms',
'GetRooms', 'JoinRoom'];

export const ChatActionsConsts: any = createActionsType(CHAT_ACTIONS);
export const ChatActions: any = createActions(ChatActionsConsts);
