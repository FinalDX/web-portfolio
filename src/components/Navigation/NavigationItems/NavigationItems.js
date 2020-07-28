import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem
                link="/" 
                exact>Home</NavigationItem>
            <NavigationItem 
                link="/Projects" >Projects</NavigationItem>
            <NavigationItem 
                link="/Contact" >Contact</NavigationItem>
        </ul>
    );
}

export default navigationItems;