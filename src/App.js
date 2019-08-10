import React from 'react';
import {Component} from 'react'
import 'flatpickr/dist/themes/material_green.css'
import 'moment/locale/pl';
import './App.css';
import AgeToday from "./components/AgeToday";
import AgePast from "./components/AgePast";
import Logo from './components/Logo';


class App extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'today'
        };

        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(currentPage) {
        this.setState({currentPage: currentPage});
    }

    renderCurrentPage = function() {
        if (this.state.currentPage === 'today') {
            return <AgeToday />;
        } else {
            return <AgePast />;
        }
    };

    render() {
        return (
            <div className="app">
                <nav>
                    <button className={this.state.currentPage === 'today' ? 'nav-btn active' : 'nav-btn'} onClick={() => this.handleNavigation('today')}>Wiek na dzisiaj</button>
                    <button className={this.state.currentPage === 'past' ? 'nav-btn active' : 'nav-btn'} onClick={() => this.handleNavigation('past')}>Wiek na dzień badania</button>
                </nav>
                {this.renderCurrentPage()}
            </div>
        )
    }
}

export default App;
