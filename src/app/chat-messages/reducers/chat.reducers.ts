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
        ...state,
        messages: [...state.messages, action.payload]
      };

    case ChatActionsConsts.SendMessage.Failed:
      return {
        ...state
      };


    case ChatActionsConsts.GetMessages.Request:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case ChatActionsConsts.GetMessages.Success:
      return {
        ...state
      };

    case ChatActionsConsts.GetMessages.Failed:
      return {
        ...state
      };


    case ChatActionsConsts.AddMessage.Request:
      return {
        ...state
      };

    case ChatActionsConsts.AddMessage.Success:
      console.log(action.payload, 'sss');
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case ChatActionsConsts.AddMessage.Failed:
      console.log('failes');
      return {
        ...state
      };



    case ChatActionsConsts.CreateRoom.Request:
      return {
        ...state
      };

    case ChatActionsConsts.CreateRoom.Success:

      return {
        ...state,
        rooms: [...state.rooms, action.payload]
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
        ...state
      };

    case ChatActionsConsts.GetRooms.Failed:
      return {
        ...state
      };


    case ChatActionsConsts.SetRooms.Request:
      return {
        ...state
      };

    case ChatActionsConsts.SetRooms.Success:
      console.log(action.payload);
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };

    case ChatActionsConsts.SetRooms.Failed:
      return {
        ...state
      };




    case ChatActionsConsts.JoinRoom.Request:
      return {
        ...state
      };

    case ChatActionsConsts.JoinRoom.Success:
      return {
        ...state
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
