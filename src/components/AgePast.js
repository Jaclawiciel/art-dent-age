import React from 'react';
import {Component} from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";
import CountUp from "react-countup/build";

class AgePast extends Component {
    constructor() {
        super();

        this.state = {
            patientBirthday: "1996-08-30",
            examinationDate: "2019-08-30",
            age: 0
        };
    }

    calculateAge = function (birthday, examinationDate) {
        if (typeof birthday !== "string") {
            birthday = birthday[0];
        } else {
            birthday = new Date(birthday);
        }
        if (typeof examinationDate !== "string") {
            examinationDate = examinationDate[0];
        } else {
            examinationDate = new Date(examinationDate);
        }
        var ageDifMs = examinationDate - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    render() {
        let patientBirthday = this.state.patientBirthday;
        let examinationDate = this.state.examinationDate;
        let age = this.calculateAge(patientBirthday, examinationDate);
        return (
            <div className="age-past">
                <h2 className="content-title">Wiek na dzień badania</h2>
                <div className="dates">
                    <div className="date-wrapper">
                        <span className="date-label">Data urodzenia</span>
                        <Flatpickr
                            value={patientBirthday}
                            onChange={patientBirthday => {
                                this.setState({
                                    patientBirthday: patientBirthday,
                                    age: this.calculateAge(patientBirthday, examinationDate)
                                });
                            }}
                        />
                    </div>
                    <div className="date-wrapper">
                        <span className="date-label">Data badania</span>
                        <Flatpickr
                            value={examinationDate}
                            onChange={examinationDate => {
                                this.setState({
                                    examinationDate: examinationDate,
                                    age: this.calculateAge(patientBirthday, examinationDate)
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="age">
                    <div className="age-number">
                        <CountUp end={age}/>
                    </div>
                    <div className="age-text">wiek</div>
                </div>
            </div>
        )
    }
}

export default AgePast;