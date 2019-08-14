import React from 'react';
import '@google/model-viewer';
import './App.css';
import * as seahorse from './assets/seahorse.gltf';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <p>Seahorse</p>
      </header>
      <section>
        <model-viewer alt="A 3D model of an seahorse." src={seahorse} magic-leap ar />
      </section>
    </div>
  );
}

export default App;
