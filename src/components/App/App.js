import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Square from '../Square/Square';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Form />
        <Square />
      </div>
    );
  }
}

export default App;
