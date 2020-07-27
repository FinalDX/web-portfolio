import React from 'react';
import Card from './Card/Card';
import classes from './Projects.module.css';
import { Animated } from 'react-animated-css';

const projects = props => (
    <Animated 
        animationIn="fadeIn"
        animationOut="fadeOut">
    <div className={classes.Projects}>
        <Card  
            image={require("../../assets/images/MWL.PNG")} 
            description={
                "Logs workouts and tracks progress.\n"
            }
            made={'Made with HTML, CSS, and JavaScript.'}
            code={"https://github.com/FinalDX/MyWorkoutLog"}
            live={"http://myworkoutlog.online/"}/>
        <Card
            image={require("../../assets/images/PP.PNG")}
            description={
                "Manages budgets and displays useful graphs. \n"
            }
            made={'Made with React.js.'}
            code={'https://github.com/FinalDX/pocket-planner'}
            live={'http://pocketplanner.online/'}/>
    </div>
    </Animated>
);

export default projects;