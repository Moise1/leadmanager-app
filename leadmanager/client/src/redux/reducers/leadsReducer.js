import * as leadsTypes from '../types';

const initialState = {
    loading: 'none',
    leads: [],
    error: '',
    open: false
}

export const leadsReducer = (state = initialState, action) => {

    switch (action.type) {

        case leadsTypes.ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload ]
            }

        case leadsTypes.GET_LEADS_REQUEST:
            return {
                ...state,
                loading: 'block'
            }

        case leadsTypes.GET_LEADS_SUCCESS:
            return {
                ...state,
                loading: 'none',
                leads: action.payload
            }

        case leadsTypes.DELETE_SINGLE_LEAD:
            
            return {
                ...state,
                leads: state.leads.filter(lead => lead.id !== action.payload)
            }

        default:
            return state;
    }
}