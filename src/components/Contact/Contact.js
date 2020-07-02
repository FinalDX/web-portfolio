import React from 'react';

import { Animated } from 'react-animated-css';

import classes from './Contact.module.css';

const contact = props => (
    <Animated 
        animationIn="slideInLeft"
        animationOut="slideOutRight">
    <div className={classes.Contact}>
        <form action="https://formspree.io/fennersean@yahoo.com" method="post">
            <p>To: fennersean@yahoo.com</p>
            <input className={classes.InputEmail} type="email" name="_replyto" placeholder="Your email" />
            <textarea className={classes.InputMessage} name="message" placeholder="Your message"></textarea>
            <input className={classes.SendBtn} type="submit" value="Send" />
        </form>
    </div>
    </Animated>
);

export default contact;