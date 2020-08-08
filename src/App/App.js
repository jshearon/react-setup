import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>INSIDE APP COMPONENT!!!</h1>
        <button className="btn btn-info">
        <i className="fab fa-react"></i>
          I am a button
        <i className="fab fa-react"></i>
        </button>
      </div>
    );
  }
}

export default App;
