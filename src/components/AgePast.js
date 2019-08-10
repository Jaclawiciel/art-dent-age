import React from 'react';
import {Component} from 'react'
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
            <div className="age-past">
                <h2 className="content-title">Wiek na dzień badania</h2>
                <div className="date-wrapper">
                    <span className="date-label">Data urodzenia</span>
                    <Flatpickr
                        value={patientBirthday}
                        onChange={patientBirthday => {
                            this.setState({patientBirthday})
                        }}
                    />
                </div>
                <div className="date-wrapper">
                    <span className="date-label">Data badania</span>
                    <Flatpickr
                        value={examinationDate}
                        onChange={examinationDate => {
                            this.setState({examinationDate})
                        }}
                    />
                </div>
                <div className="age">
                    <div className="age-number">
                        <Moment locale="pl" diff={patientBirthday.toString()}
                                unit="years">{examinationDate.toString()}</Moment>
                    </div>
                    <div className="age-text">lata</div>
                </div>
            </div>
        )
    }
}

export default AgePast;