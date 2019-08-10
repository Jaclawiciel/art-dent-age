import React from 'react';
import { Component } from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";

class AgeToday extends Component {
    constructor() {
        super();

        this.state = {
            patientBirthday: new Date("1996-08-30")
        };
    }

    render() {
        let { patientBirthday } = this.state;
        return (
            <div className="age-today">
                <h2 className="content-title">Wiek na dziś - <span className="date"><Moment format="DD.MM.YYYY"/></span> </h2>
                <Flatpickr
                    value={patientBirthday}
                    onChange={patientBirthday => { this.setState({patientBirthday}) }}
                />
                <div className="age">
                    <div className="age-number">
                        <Moment locale="pl" diff={patientBirthday.toString()} unit="years">{new Date()}</Moment>
                    </div>
                    <div className="age-text">Wiek</div>
                </div>
            </div>
        )
    }
}

export default AgeToday