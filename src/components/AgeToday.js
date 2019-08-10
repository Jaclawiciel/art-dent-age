import React from 'react';
import { Component } from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";
import Age from "./Age";

class AgeToday extends Component {
    constructor() {
        super();

        this.state = {
            patientBirthday: new Date("1996-08-30")
        };
    }

    getAgeText = function() {
        let age = parseInt(this.state.age);
        switch (true) {
            case (age === 0):
                return 'lat';
            case (age === 1):
                return 'rok';
            case (age > 1 && age <= 4):
                return 'lata';
            case (age >= 5 && age <= 21):
                return 'lat';
            default:
                return 'lata'
        }
    };

    render() {
        let patientBirthday = this.state.patientBirthday;
        let age = <Moment locale="pl" diff={patientBirthday.toString()} unit="years">{new Date()}</Moment>;
        return (
            <div className="age-today">
                <h2 className="content-title">Wiek na dziś - <span className="date"><Moment format="DD.MM.YYYY"/></span> </h2>
                <div className="date-wrapper">
                    <span className="date-label">Data urodzenia</span>
                    <Flatpickr
                        value={patientBirthday}
                        onChange={patientBirthday => { this.setState({patientBirthday}) }}
                    />
                </div>
                <div className="age">
                    <div className="age-number">
                        {age}
                    </div>
                    <div className="age-text">{this.getAgeText()}</div>
                </div>
            </div>
        )
    }
}

export default AgeToday