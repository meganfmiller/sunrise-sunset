import React, { Component } from 'react';

class Longitude extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }
    render() {
      return (
        <div className="Longitude">
          <input className='input_box' type='text' value={this.props.longitude} onChange={(e) => this.props.updateLng(e.target.value)}/>
        </div>
      );
    }
  }

  export default Longitude