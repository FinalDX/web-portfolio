import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem
                link="#" 
                clicked={props.clicked}>Home</NavigationItem>
            <NavigationItem 
                link="#Projects" 
                clicked={props.clicked}>Projects</NavigationItem>
            <NavigationItem 
                link="#Contact" 
                clicked={props.clicked}>Contact</NavigationItem>
        </ul>
    );
}

export default navigationItems;