import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <h2>Qcrew</h2>
        <p style={{width:'80%'}}> 
        We build modular quantum devices to enable robust quantum computing 
        <br/>  and explore novel phenomena in quantum physics.
        </p>
        
        <a
          className="App-link"
          href="https://qcrew.github.io/doc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the Doc
        </a>
      </header>
    </div>
  );
}

export default App;
