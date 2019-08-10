import React from 'react';
import { Component } from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";

class AgePast extends Component {
    constructor() {
        super();

        this.state = {
            patientBirthday: new Date("1996-08-30"),
            examinationDate: new Date()
        };
    }

    render() {
        let patientBirthday = this.state.patientBirthday;
        let examinationDate = this.state.examinationDate;
        return (
            <div className="age-today">
                <h4>WIEK NA DZIEŃ BADANIA</h4>
                Data urodzenia:
                <Flatpickr
                    value={patientBirthday}
                    onChange={patientBirthday => { this.setState({patientBirthday}) }}
                />
                <br />
                Data badania:
                <Flatpickr
                    value={examinationDate}
                    onChange={examinationDate => { this.setState({examinationDate}) }}
                />
                <h3>
                    Wiek: <Moment locale="pl" diff={patientBirthday.toString()} unit="years">{examinationDate.toString()}</Moment>
                </h3>
                <p>A dokładniej: <Moment
                    locale="pl-pl"
                    duration={patientBirthday.toString()}
                    date={examinationDate.toString()}
                    unit="years"
                /></p>
            </div>
        )
    }
}

export default AgePast;