import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Latitude from './components/Latitude';
import Longitude from './components/Longitude';
import Sunrise from './components/Sunrise';
import Sunset from './components/Sunset';
import Button from './components/Button'

class App extends Component {
  constructor() {
    super();

    this.state = {
      latitude: '',
      longitude: '',
      sunrise: '',
      sunset: ''
    }

    this.updateLat = this.updateLat.bind(this);
    this.updateLng = this.updateLng.bind(this);
    this.getSunrise = this.getSunrise.bind(this);

  }

  updateLat(input) {
    console.log(input)
    this.setState({
      latitude: input
    })
    console.log(this.state.latitude)
  }

  updateLng(input) {
    console.log(input)
    this.setState({
      longitude: input
    })
  }

  getSunrise() {
    console.log(this.state.latitude, this.state.longitude)
    let baseUrl = `https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}`;
    axios.get(baseUrl).then(response => {
      this.setState({
        sunrise: response.data.results.sunrise,
        sunset: response.data.results.sunset
      })
      console.log(response.data.results.sunrise)
    })
  }

  render() {
    return (
      <div className="App">

        <div className='titles'>
          <h1>Latitude</h1>
          <h1>Longitude</h1>
        </div>
        <div className='input_half'>
          <Latitude updateLat={this.updateLat} />
          <Longitude updateLng={this.updateLng} />
        </div>
        <div className='button_part'>
          <Button
            lat={this.state.latitude}
            lng={this.state.longitude}
            getSunrise={this.getSunrise} />
        </div>
        <div className='titles2'>
          <h1>Sunrise</h1>
          <h1>Sunset</h1>
        </div>
        <div className='display_half'>
          <Sunrise sunrise={this.state.sunrise} />
          <Sunset sunset={this.state.sunset} />
        </div>
        <div className='container'></div>
        <div className='container2'></div>
      </div>
    );
  }
}

export default App;
