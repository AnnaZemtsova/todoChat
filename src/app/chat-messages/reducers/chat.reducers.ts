import {Chat} from '../model/chat';
import {ChatActionsConsts} from '../actions/chat.actions';
import {act} from '@ngrx/effects';

export interface State {
  rooms: string[];
  room: string;
  messages: string[];
}
const initialState: State = {
  rooms: [],
  room: '',
  messages: []
};

export function chatReducer(state = initialState, action: any): State {
  switch (action.type) {
    case ChatActionsConsts.SendMessage.Request:
      return {
        ...state
      };

    case ChatActionsConsts.SendMessage.Success:
      return {
        ...state
      };

    case ChatActionsConsts.SendMessage.Failed:
      return {
        ...state
      };



    case ChatActionsConsts.CreateRoom.Request:
      return {
        ...state
      };

    case ChatActionsConsts.CreateRoom.Success:
      return {
        ...state
      };

    case ChatActionsConsts.CreateRoom.Failed:
      return {
        ...state
      };



    case ChatActionsConsts.GetRooms.Request:
      return {
        ...state
      };

    case ChatActionsConsts.GetRooms.Success:
      return {
        ...state,
        rooms: action.payload
      };

    case ChatActionsConsts.GetRooms.Failed:
      return {
        ...state
      };




    case ChatActionsConsts.JoinRoom.Request:
      return {
        ...state
      };

    case ChatActionsConsts.JoinRoom.Success:
      return {
        ...state,
        room: action.payload
      };

    case ChatActionsConsts.JoinRoom.Failed:
      return {
        ...state
      };



    default:
      return {
        ...state
      };
  }
}
