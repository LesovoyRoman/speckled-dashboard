import { combineReducers } from 'redux';
import authReducer from './authReduces'

export default combineReducers({
    auth: authReducer
});