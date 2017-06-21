import React, { Component } from 'react';

import Logo from './../logo';
import Nav from './../nav';
import Buy from './../buy';

import s from './Header';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { // init top weather hide
            display: false
        };
    }
    render() {
        return (
            <div className={s.header}>
                <Logo />
                <Nav />
                <Buy />
            </div>
        );
    }
}

export default Header;
