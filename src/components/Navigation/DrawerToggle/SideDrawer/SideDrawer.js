import React from 'react';

import NavigationItems from '../../NavigationItems/NavigationItems';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {
    let addedClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        addedClasses = [classes.SideDrawer, classes.Open];

    }

    return (
        <div className={addedClasses.join(' ')}>
            <nav>
                <NavigationItems clicked={props.clicked} />
            </nav>
        </div>
    );
}

export default sideDrawer;