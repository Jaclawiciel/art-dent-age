import React from 'react';
import { Component } from 'react'
import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import Moment from 'react-moment';
import 'moment/locale/pl';
import './App.css';
import AgeToday from "./components/AgeToday";
import AgePast from "./components/AgePast";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="app">
            <AgeToday />
            <AgePast />
        </div>
    )
  }
}

export default App;
