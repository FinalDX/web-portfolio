import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem
                clicked={props.clicked} 
                link="/" 
                exact>Home</NavigationItem>
            <NavigationItem 
                clicked={props.clicked} 
                link="/Projects" >Projects</NavigationItem>
            <NavigationItem 
                clicked={props.clicked} 
                link="/Contact" >Contact</NavigationItem>
        </ul>
    );
}

export default navigationItems;