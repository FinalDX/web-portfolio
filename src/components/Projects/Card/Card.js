import React, { Component } from 'react';

import Overlay from '../Overlay/Overlay';

import classes from './Card.module.css';

class Card extends Component {
    state = { showOverlay: false };

    clicked = () => {
        this.setState({showOverlay: this.state.showOverlay ? false : true})
    }
    
    render () {
        let addedClasses = [classes.Card];
        if (!this.state.showOverlay) {
            addedClasses = [classes.Card, classes.Pointable];
        }   
        return (
        <div className={addedClasses.join(' ')} onClick={this.clicked}>
            <img src={this.props.image} alt=""/>
            <Overlay 
                description={this.props.description}
                show={this.state.showOverlay} />
        </div>
    );
        
    }
}

export default Card;