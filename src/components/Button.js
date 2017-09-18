import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className='Button'>
                <button onClick={() => this.props.getSunrise(this.props.latitude,this.props.longitude)}><span>Get Times</span></button>
            </div>
        )
    }
}

export default Button