import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomer } from '../../actions/customers';

export class Form extends Component {
    
    state = {
        first_name: '',
        last_name: '',
        email: '',
    }

    static propTypes = {
        addCustomer: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value })
    onSubmit = e => {
        e.preventDefault();
        const { first_name, last_name, email } = this.state;
        const customer = { first_name, last_name, email };
        this.props.addCustomer(customer)
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
        });
    }

    render() {
        const { first_name, last_name, email } = this.state;
        return (
            <div>
                <h2>Add Customer</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} name="email" onChange={this.onChange} required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" value={first_name} name="first_name" onChange={this.onChange} required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" value={last_name} name="last_name" onChange={this.onChange} required/>
                        </div>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}



export default connect(null, { addCustomer })(Form);