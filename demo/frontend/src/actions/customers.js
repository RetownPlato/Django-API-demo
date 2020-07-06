import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER, GET_ERRORS } from './types';

//GET CUSTOMERS
export const getCustomers = () => dispatch => {
    axios.get('/customers/')
    .then(res => {
        console.log(res.data.results);
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data.results,
        });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status))
    );
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
        console.log(res.data);
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data,
        });
    }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status))
    );
};