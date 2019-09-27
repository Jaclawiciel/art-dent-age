import React from 'react'
import {Component} from 'react';
import InputError from "../InputError";
import PeselValidator from "../../utilities/PeselValidator";

class PeselInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            peselErrorMessage: props.peselErrorMessage,
            pesel: props.pesel,
        };
        this.handlePeselInput = this.handlePeselInput.bind(this);
    }

    handlePeselInput = function (event) {
        const pesel = event.target.value;
        let peselValidator = PeselValidator.validatePesel(pesel);

        if (peselValidator.isValid) {
            this.props.setPatientBirthday(peselValidator.date);
            this.props.setPatientGender(peselValidator.gender);
        } else {
            this.props.setPatientGender("");
        }
        this.setState({pesel: pesel, peselErrorMessage: peselValidator.errorMessage});
    };

    render() {
        let pesel = this.state.pesel;
        let peselErrorMessage = this.state.peselErrorMessage;

        return (
            <div className="input-wrapper pesel-wrapper">
                <span className="input-label">Numer PESEL</span>
                <div className="input-resetable">
                    <input
                        type="tel"
                        className="input"
                        value={pesel}
                        onChange={this.handlePeselInput}
                    />
                    <span className="reset-button" onClick={() => {
                        this.setState({pesel: "", peselErrorMessage: ""});
                        this.props.setPatientGender("");
                    }}>x</span>
                </div>
                <InputError errorMessage={peselErrorMessage} />
            </div>
        );
    }
}

export default PeselInput;