
import {createActions, createActionsType} from '../../utils/action.creator';

export  const CHAT_ACTIONS = ['GetMessage', 'SendMessage', 'GetMessages', 'CreateRoom',
'GetRooms', 'JoinRoom'];

export const ChatActionsConsts: any = createActionsType(CHAT_ACTIONS);
export const ChatActions: any = createActions(ChatActionsConsts);
