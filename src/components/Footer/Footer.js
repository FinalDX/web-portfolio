import React from 'react'
import classes from './Footer.module.css';

const footer = props => (
    <footer className={classes.Footer}>
        <p>
            Photo by <a href="https://unsplash.com/@chuttersnap?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">chuttersnap</a> on <a href="https://unsplash.com/s/photos/white?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
        </p>
    </footer>
);

export default footer;