import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';

import classes from './Layout.module.css';

class Layout extends Component {
    render () {
        return (
            <div className={classes.Layout}>
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

export default Layout;