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
                <h4>WIEK NA DZISIAJ</h4>
                <Flatpickr
                    value={patientBirthday}
                    onChange={patientBirthday => { this.setState({patientBirthday}) }}
                />
                <h3>
                    Wiek: <Moment locale="pl" diff={patientBirthday.toString()} unit="years">{new Date()}</Moment>
                </h3>
                {/*<p>A dokładniej: <Moment*/}
                {/*    locale="pl-pl"*/}
                {/*    date={patientBirthday.toString()}*/}
                {/*    unit="years"*/}
                {/*    durationFromNow*/}
                {/*/></p>*/}
            </div>
        )
    }
}

export default AgeToday