import React from 'react'
import {Component} from 'react';

class Age extends Component {
    constructor (props) {
        super(props);
        this.state = {
            age: props.age
        }
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
        return (

            <div className="age">
                <div className="age-number">
                    {this.state.age}
                </div>
                <div className="age-text">{this.getAgeText()}</div>
            </div>
        );
    }
}

export default Age;