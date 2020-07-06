import axios from 'axios';
import { createMessage } from './messages';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, GET_ERRORS } from './types';

//GET CUSTOMERS
export const getCustomers = () => dispatch => {
    axios.get('/customers/')
    .then(res => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data.results,
        });
    }).catch(err => console.log(err));
};

// DELETE CUSTOMERS
export const deleteCustomer = (id) => dispatch => {
    axios.delete(`/customers/${id}`)
    .then(res => {
        dispatch(createMessage({ deleteCustomer: "Customer Deleted" }));
        dispatch({
            type: DELETE_CUSTOMER,
            payload: id,
        });
    }).catch(err => console.log(err));
};

// ADD CUSTOMER
export const addCustomer = (customer) => dispatch => {
    axios.post("/customers/", customer)
    .then(res => {
        dispatch(createMessage({ addCustomer: "Customer Added" }));
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data.results,
        });
    }).catch((err) => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
};