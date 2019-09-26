import React from 'react';
import {Component} from 'react'
import Flatpickr from "react-flatpickr";
import Moment from "react-moment";
import CountUp from "react-countup/build";
import PeselInput from "./Inputs/PeselInput";

class AgePast extends Component {
    constructor() {
        super();

        this.state = {
            pesel: "",
            peselErrorMessage: "",
            patientBirthday: "1996-08-30",
            examinationDate: "2019-08-30",
            age: 0,
            gender: ""
        };
        this.setPatientBirthday = this.setPatientBirthday.bind(this);
        this.setPatientGender = this.setPatientGender.bind(this);
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

    setPatientBirthday(patientBirthday) {
        this.setState({
            patientBirthday: `${patientBirthday.year}-${patientBirthday.month}-${patientBirthday.day}`
        })
    }

    setPatientGender(gender) {
        this.setState({
            gender: gender
        });
    }

    render() {
        let pesel = this.state.pesel;
        let patientBirthday = this.state.patientBirthday;
        let peselErrorMessage = this.state.peselErrorMessage;
        let examinationDate = this.state.examinationDate;
        let age = this.calculateAge(patientBirthday, examinationDate);
        let gender = this.state.gender;

        return (
            <div className="age-past">
                <h2 className="content-title">Wiek na dzień badania - <span className="date"><Moment format="DD.MM.YYYY" date={typeof examinationDate !== "string" ? examinationDate[0] : examinationDate} /></span></h2>
                <div className="date-age-wrapper">
                    <div className="dates">
                        <PeselInput setPatientBirthday={this.setPatientBirthday}
                                    setPatientGender={this.setPatientGender}
                                    patientBirthday={patientBirthday}
                                    pesel={pesel}
                                    peselErrorMessage={peselErrorMessage}
                        />
                        <span className="or-wrapper">lub</span>
                        <div className="input-wrapper date-wrapper">
                            <span className="input-label">Data urodzenia</span>
                            <Flatpickr
                                className="input"
                                value={patientBirthday}
                                onChange={patientBirthday => {
                                    this.setState({
                                        patientBirthday: patientBirthday,
                                        age: this.calculateAge(patientBirthday, examinationDate)
                                    });
                                }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <span className="input-label">Data badania</span>
                            <Flatpickr
                                className="input"
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
                    <div className={gender !== "" ? gender === "M" ? "age male" : "age female" : "age"}>
                        <div className="gender-sign">{gender !== "" ? gender === "M" ? "mężczyzna ♂" : "kobieta ♀" : ""}</div>
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

export default AgePast;