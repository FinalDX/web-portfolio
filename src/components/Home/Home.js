import React from 'react';

import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

const home = props => (
        <div className={classes.Home}>
            <h1>Sean Fenner &mdash; Web Developer</h1>
            <NavigationItem clicked={props.clicked} link="/Projects" >
                <Button btnType="Full">Projects</Button>
            </NavigationItem>
            <NavigationItem clicked={props.clicked} link="/Contact" >
                <Button btnType="Ghost">Contact</Button>
            </NavigationItem>
        </div>
);

export default home;