import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from '../components/Message'

class MessageContainer extends Component {
    render() {
        let {message}=this.props
        return (
            <div>
                <Message message={message}/>
            </div>
        );
    }
}
MessageContainer.protoTypes={
    message:PropTypes.string.isRequired
}
const mapStateToProps=state=>{
    return{
        message: state.message
    }
}
export default connect(mapStateToProps,null) (MessageContainer); 