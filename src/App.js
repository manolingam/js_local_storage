import React, { Component } from 'react';
import PutCard from './PutCard.js';
import GetCard from './GetCard.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <PutCard/>
          <GetCard/>
        </div>
        <p className='mark'>Made with &hearts; by Mano</p>
      </div>
    );
  }
}

export default App;
