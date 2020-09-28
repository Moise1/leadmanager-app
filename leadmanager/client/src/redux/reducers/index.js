import { combineReducers } from 'redux';
import {leadsReducer} from './leadsReducer';
import {errorsReducer} from './errors'
import {messagesReducer} from './messages'
export const rootReducer = combineReducers({
    leads: leadsReducer,
    errors: errorsReducer,
    messages: messagesReducer
})