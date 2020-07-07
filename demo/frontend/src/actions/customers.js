import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, GET_ERRORS } from './types';
import { tokenConfig } from './auth';

//GET CUSTOMERS
export const getCustomers = () => (dispatch, getState) => {
    axios.get('/api/customers/', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data.results,
        });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CUSTOMERS
export const deleteCustomer = id => (dispatch, getState) => {
    axios.delete(`/api/customers/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteCustomer: "Customer Deleted" }));
        dispatch({
            type: DELETE_CUSTOMER,
            payload: id,
        });
    }).catch(err => console.log(err));
};

// ADD CUSTOMER
export const addCustomer = customer => (dispatch, getState) => {
    axios.post("/api/customers/", customer, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addCustomer: "Customer Added" }));
        console.log(res.data);
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data,
        });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status))
    );
};