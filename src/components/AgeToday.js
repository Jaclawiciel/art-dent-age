import React from 'react';
import {Component} from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";
import CountUp from 'react-countup';

class AgeToday extends Component {
    constructor() {
        super();

        this.state = {
            patientBirthday: "1996-08-30",
            age: 0
        };
    }

    calculateAge = function (birthday) {
        if (typeof birthday !== "string") {
            birthday = birthday[0];
        } else {
            birthday = new Date(birthday);
        }
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    render() {
        let patientBirthday = this.state.patientBirthday;
        let age = this.calculateAge(patientBirthday);
        return (
            <div className="age-today">
                <h2 className="content-title">Wiek na dziś - <span className="date"><Moment format="DD.MM.YYYY"/></span>
                </h2>
                <div className="date-age-wrapper">
                    <div className="date-wrapper">
                        <span className="date-label">Data urodzenia</span>
                        <Flatpickr
                            value={patientBirthday}
                            onChange={patientBirthday => {
                                this.setState({
                                    patientBirthday: patientBirthday,
                                    age: this.calculateAge(patientBirthday)
                                });
                            }}
                        />
                    </div>
                    <div className="age">
                        <div className="age-number">
                            <CountUp end={age}/>
                        </div>
                        <div className="age-text">wiek</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgeToday