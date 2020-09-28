import * as leadsTypes from '../types'; 

const initialState = {} 

export const messagesReducer = (state=initialState, action) =>{

    switch(action.type){
        case leadsTypes.CREATE_MESSAGE: 
            return (state = action.payload)
        default: 
            return state;
    }
}