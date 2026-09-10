import React from 'react';
import './App.css';
import { NameButton } from './NameButton';
import {MagnusPortfolio} from './MagnusPortfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='top-text'>Magnus Culley Project Showcase</p>
        <p>Links: <a style={{ color: 'lightblue' }} href="https://www.linkedin.com/in/magnus-culley-081b33297/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a style={{ color: 'lightblue' }} href="https://github.com/magnusculley" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </header>
      <MagnusPortfolio/>
    </div>
  );
}

export default App;
