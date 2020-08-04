import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={classes.NavigationItem} onClick={props.clicked}>
        <NavLink
            to={props.link}
            exact
            activeStyle={
                {
                    color: '#6699cc',
                    borderBottom: '2px solid #6699cc',
                    paddingBottom: '4px'
                }
            }>{props.children}</NavLink>
    </li>
);

export default navigationItem;