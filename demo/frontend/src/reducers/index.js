import { combineReducers } from 'redux';
import customers from './customers';
import errors from './errors';
import messages from './messages';
export default combineReducers({
    customers, errors, messages,
});