import React from 'react';
import './App.css';
import { NameButton } from './NameButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='top-text'>Meet FFL's team of highly esteemed engineers:</p>
      </header>
      <div>
        <NameButton></NameButton>
      </div>
    </div>
  );
}

export default App;
