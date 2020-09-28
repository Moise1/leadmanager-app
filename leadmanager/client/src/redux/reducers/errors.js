import * as leadsTypes from '../types'; 

const initialState = {
    msg: {},
    status: null
} 

export const errorsReducer = (state=initialState, action) =>{

    switch(action.type){
        case leadsTypes.GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        
        default: 
            return state;
    }
}