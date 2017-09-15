import React, { Component } from 'react';

class Sunset extends Component {
    render() {
        return (
            <div className="Sunset">
                <div className='time_display'>
                    <div className='time'>
                        {this.props.sunset}
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Sunset