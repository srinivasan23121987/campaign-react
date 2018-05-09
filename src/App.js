import React, { Component } from 'react';
import factory from "./factory";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
