import axios from 'axios';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from './types';

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
        dispatch({
            type: DELETE_CUSTOMER,
            payload: id,
        });
    }).catch(err => console.log(err));
};

// ADD CUSTOMERS
export const addCustomer = (customer) => dispatch => {
    axios.post("/customers/", customer)
    .then(res => {
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data.results,
        });
    }).catch(err => console.log(err));
};