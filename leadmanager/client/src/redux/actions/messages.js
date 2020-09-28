import * as types from '../types';

export const createMessage = msg =>{
    return {
        type: types.CREATE_MESSAGE,
        payload: msg
    }
}