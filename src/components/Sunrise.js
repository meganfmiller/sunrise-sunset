import React, { Component } from 'react';

class Sunrise extends Component {
    render() {
        return (
            <div className="Sunrise">
                <div className='time_display'>
                    <div className='time'>
                        {this.props.sunrise}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Sunrise