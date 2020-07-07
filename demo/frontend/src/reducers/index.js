import { combineReducers } from 'redux';
import customers from './customers';
import errors from './errors';
import messages from './messages';
import auth from './auth';
export default combineReducers({
    customers, errors, messages, auth,
});