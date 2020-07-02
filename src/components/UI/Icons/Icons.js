import React from 'react';

import {IoLogoLinkedin} from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';

import classes from './Icons.module.css';

const icons = props => (
    <div className={classes.Icons}>
        <a href="https://www.linkedin.com/in/sean-fenner-7508a9188/" 
                target="_blank"
                rel="noopener noreferrer">
            <IoLogoLinkedin size="2em" style={{margin: '0 5px'}}/>
        </a>
        <a href="http://github.com/FinalDX" 
                target="_blank"
                rel="noopener noreferrer">
            <IoLogoGithub size="2em" style={{margin: '0 5px'}}/>
        </a>
    </div>
);

export default icons;