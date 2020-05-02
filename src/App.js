import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';

function App() {
  console.log("hi");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CountUp start={0} end={65488} duration={3} separator="," />
          
        </a> <span>Clients</span>

        
      </header>
    </div>
  );
}

export default App;
