import React from 'react';
import { Component } from 'react'
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import Moment from 'react-moment';
import 'moment/locale/pl';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date("1996-08-30")
    };
  }

  render() {
    let { date } = this.state;
    return (
        <div className="app">
          <Flatpickr
              value={date}
              onChange={date => { this.setState({date}) }}
          />
          <h1>
            <h3>
              Wiek: <Moment diff={date.toString()} unit="years">{new Date()}</Moment>
            </h3>
            <p>A dokładniej: <Moment
                locale="fr"
                date={date.toString()}
                unit="years"
                durationFromNow
            /></p>
          </h1>
        </div>
    )
  }
}

export default App;
