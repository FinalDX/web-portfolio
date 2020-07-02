import React from 'react';

import {IoLogoGithub, IoIosFlash} from 'react-icons/io';

import classes from './Overlay.module.css';

const overlay = props => {
    let links = "";
    if (props.show) {
        links = (
            <div>
                <div className={classes.Links}>
            <a href="https://github.com/FinalDX/MyWorkoutLog" 
                target="_blank"
                rel="noopener noreferrer"
                disabled={!props.show}>
                <IoLogoGithub size='2em' />
                <p>Code</p>
            </a>
        </div>
        <div className={classes.Links}>
            <a href="http://myworkoutlog.online/" 
                target="_blank"
                rel="noopener noreferrer"
                disabled={!props.show}>
                <IoIosFlash size='2em' />
                <p>Live</p>
            </a>
        </div>
            </div>
        );
    }

    return (
        <div className={classes.Overlay} 
            style={{opacity: props.show ? '0.9' : '0'}}>
            <p>{props.description}</p>
            {links}
        </div>
    );
}

export default overlay;