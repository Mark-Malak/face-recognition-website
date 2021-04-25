import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: '5edb71b634384f1f98c49bd32b3b8b36'
 });

const particlesOptions = {

  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}



function App() {
  const [input, setInput] = useState('');

  function onInputChange(event) {
    console.log(event.target.value);
  }

  function onButtonSubmit() {
    console.log('clicked');
    app.models.predict("5edb71b634384f1f98c49bd32b3b8b36", "https://static01.nyt.com/images/2019/10/02/video/02-still-for-america-room-loop/02-still-for-america-room-loop-superJumbo.jpg")
      .then(
        function (response) {
          // this.onFaceCalculate(response, this.state.boxHeight, this.state.boxWidth);
          console.log(response);
        },
        function (err) {
          // there was an error
        }
      );







  }

  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions}

      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />

      {/* <Facerecogniton/> */}
    </div>
  );
}

export default App;
