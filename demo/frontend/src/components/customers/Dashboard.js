import React, { Fragment } from 'react';
import Form from './Form';
import Customers from './Customer';

function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Customers />
        </Fragment>
    )
}

export default Dashboard