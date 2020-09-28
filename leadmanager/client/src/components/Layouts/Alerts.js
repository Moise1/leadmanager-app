import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Alerts extends React.Component{

    componentDidUpdate(prevProps){
        const {error, alert, message} = this.props
        if(error !== prevProps.error){
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if(error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
        }

        if(message !== prevProps.message){
            if(message.leadAdded) alert.success(message.leadAdded);
            if(message.deleteLead) alert.success(message.deleteLead);
        }
    }
    
  render(){
      return <Fragment/>
  }

}

const mapStateToProps = state =>{
    return {
        error: state.errors,
        message: state.messages
    }
}

Alerts.propTypes = {
    error: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withAlert()(Alerts));
