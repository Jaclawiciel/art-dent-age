import React from 'react';
import {Component} from 'react';
import logo from '../images/logo.jpg';

class Logo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
          <div className="logo">
              <img src={logo} alt="logo" />
          </div>
        );
    }
}

export default Logo;