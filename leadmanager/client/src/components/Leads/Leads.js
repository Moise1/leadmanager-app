import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as leadsActions from '../../redux/actions/leadsActions'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core'

class Leads extends React.Component {

    componentDidMount() {
        this.props.getLeads();
    };


    render() {
        return (
            <Fragment>

                {
                    this.props.leads.loading === 'block' ?
                        <CircularProgress
                            variant="static"
                            size={25}
                            color="inherit"/> : null
                }
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Messae</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <Button type="submit" className="btn btn-danger btn-sm" onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


Leads.propTypes = {
    leads: PropTypes.object.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        leads: state.leads
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLeads: () => dispatch(leadsActions.getLeadsAction()),
        deleteLead: (id) => dispatch(leadsActions.deleteSingleLead(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
