import axios from 'axios'
import * as leadsTypes from '../types';
import {createMessage} from './messages'

// CREATE NEW LEAD 
export const addNewLead = (newLeadInfo) => async dispatch => {

    try {
        dispatch(getLeadsRequestAction())
        const response = await axios.post('api/leads/', newLeadInfo);
        const result = await response.data;
        dispatch(successfulLeadCreation(result))
        dispatch(createMessage({leadAdded: 'Lead manager successfully added.'}));

    } catch (error) {
        if (error.response) {
            const errors = {
                msg: error.response.data,
                status: error.response.status
            }
            dispatch(leadsErrors(errors))
        }else {
            dispatch(leadsErrors('Network Error.'))
        }
    }

}

// GET ALL LEADS
export const getLeadsAction = () => async dispatch => {

    try {
        dispatch(getLeadsRequestAction());
        const res = await axios.get('/api/leads/');
        const leadsResults = await res.data;
        dispatch(successfulLeadsAction(leadsResults))

    } catch (error) {
        if (error.response) {
            const errors = {
                msg: error.response.data,
                status: error.response.status
            }
            dispatch(leadsErrors(errors))
        }else {
            dispatch(leadsErrors('Network Error.'))
        }
    }
}


// DELETE A SINGLE LEAD ACTION

export const deleteSingleLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`).then(() => {
        dispatch(createMessage({deleteLead: 'Lead manager successfully deleted.'}));
        dispatch({type: leadsTypes.DELETE_SINGLE_LEAD,payload: id})
    }).catch(error => {
        if (error.response) {
            const errors = {
                msg: error.response.data,
                status: error.response.status
            }
            dispatch(leadsErrors(errors))
        }else{
            dispatch(leadsErrors('Network Error.'))
        }
    })
}

// SEND GET ALL LEADS REQUEST

export const getLeadsRequestAction = () => {

    return {
        type: leadsTypes.GET_LEADS_REQUEST
    }
}

// SUCCESSFULL NEW LEAD CREATION
export const successfulLeadCreation = (newLeadInfo) => {

    return {
        type: leadsTypes.ADD_LEAD,
        payload: newLeadInfo
    }
}

// SUCCESSFULL LEADS ACTION REQUEST
export const successfulLeadsAction = (leadsResults) => {

    return {
        type: leadsTypes.GET_LEADS_SUCCESS,
        payload: leadsResults
    }
}

// GET ERRORS LEADS ACTION
export const leadsErrors = errors => {

    return {
        type: leadsTypes.GET_ERRORS,
        payload: errors
    }
}

// SINGLE LEAD ACTION
export const singleLeadAction = id => {

    return {
        type: leadsTypes.DELETE_SINGLE_LEAD,
        payload: id
    }
}
