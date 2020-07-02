import React from 'react';
import Card from './Card/Card';
import classes from './Projects.module.css';
import { Animated } from 'react-animated-css';

const projects = props => (
    <Animated 
        animationIn="slideInLeft"
        animationOut="fadeOut">
    <div className={classes.Projects}>
        <Card  
            image={require("../../assets/images/MWL.PNG")} 
            description={
                "Logs workouts and tracks progress.\n" +
                "Made with HTML, CSS, and JavaScript."
            }/>
    </div>
    </Animated>
);

export default projects;