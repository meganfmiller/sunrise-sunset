import React, { Component } from 'react';

class Latitude extends Component {
    
    render() {
        
      return (
        <div className="Latitude">
          <input className='input_box' type='text' value={this.props.latitude} onChange={(e) => this.props.updateLat(e.target.value)}/>
              
        </div>
      );
    }
  }

  export default Latitude