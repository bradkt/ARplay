import React from 'react';
import '@google/model-viewer';
import './App.css';
import * as seahorse from './assets/seahorse.gltf';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <section>
          <model-viewer alt="A 3D model of an seahorse." 
          src={seahorse} 
          ar 
          auto-rotate
          camera-controls>
          </model-viewer>
        </section>
      </div>
    );
  }
}

export default App;
