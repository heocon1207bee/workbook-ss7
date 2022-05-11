import React from 'react';
import './App.css';
import ExA from './ExA';
import ExB from './ExB'
import { useState } from 'react';
import ExC from './ExC';

function App() {
  const [render, editRender] = useState(null)

  const handleB1 = () => {
    editRender(<ExA/>)
  }

  const handleB2 = () => {
    editRender(<ExB/>)
  }

  const handleB3 = () => {
    editRender(<ExC/>)
  }
  
  return (
    <div className="App">
      <button onClick={handleB1}>Excercise A</button>
      <button onClick={handleB2}>Excercise B</button>
      <button onClick={handleB3}>Excercise C</button>
      {render}
    </div>
  );
}

export default App;
