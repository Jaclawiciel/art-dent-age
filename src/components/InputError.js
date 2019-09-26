import React from 'react'
import {Component} from 'react';

class InputError extends Component {
    constructor (props) {
        super(props);
        this.state = {
            errorMessage: props.errorMessage
        };
    }

    render() {
        return (
            <span className={this.props.errorMessage.length > 0 ? 'error-message show' : 'error-message'}>{this.props.errorMessage}</span>
        );
    }
}

export default InputError;