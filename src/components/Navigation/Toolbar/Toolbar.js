import React, { Component } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Icons from '../../UI/Icons/Icons';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

import classes from './Toolbar.module.css';

class Toolbar extends Component {
    state = { showSideDrawer: false };

    clicked = () => { 
        this.setState(
            { showSideDrawer: this.state.showSideDrawer ? false : true}
        );
    }

    render () {
        return (
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={this.clicked} 
                    show={this.state.showSideDrawer} />
                <nav className={classes.DesktopNav}>
                    <NavigationItems />
                </nav>
                <div className={classes.Icons}>
                    <Icons />
                </div> 
            </header>
        );
    }
}

export default Toolbar;