import React from 'react';
import { TextField } from '@material-ui/core'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as leadsActions from '../../redux/actions/leadsActions';
import { CustomTextField } from '../../styled-components'
import { Alert } from '../../styled-components';

class Form extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })


    submitForm = async (e) => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const newLead = { name, email, message }
        await this.props.addNewLead(newLead);
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <div className="card-body mt-5 mb-4 container">
                <h4 className="mb-5 mt-5">Add a lead</h4>
                <form action="" className="justify-content-lg-center">
                    <CustomTextField
                        className="d-block mb-3"
                        name="name"
                        label="Name"
                        variant="outlined"
                        InputProps={{
                            autoComplete: "off"
                        }}
                        value={this.state.name}
                        onChange={this.onChange} />

                    <CustomTextField
                        className="d-block mb-3"
                        name="email"
                        label="Email"
                        variant="outlined"
                        InputProps={{
                            autoComplete: "off"
                        }}
                        value={this.state.email}
                        onChange={this.onChange} />

                    <CustomTextField
                        className="d-block mb-3"
                        name="message"
                        label="Message"
                        variant="outlined"
                        InputProps={{
                            autoComplete: "off"
                        }}
                        value={this.state.message}
                        onChange={this.onChange} />

                    <Button
                        type="submit"
                        className="mb-3"
                        variant="primary"
                        onClick={this.submitForm}>
                        Add
                    </Button>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    addNewLead: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        leads: state.leads
    }
}

const mapDispatch = dispatch => {
    return {
        addNewLead: (newLeadInfo) => dispatch(leadsActions.addNewLead(newLeadInfo)),

    }
}
export default connect(mapStateToProps, mapDispatch)(Form);