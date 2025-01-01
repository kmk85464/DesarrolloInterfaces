import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cuadrado from './Cuadrado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estudio de React.Learn ReactLearn React
        </p>
      </header>
      <div className='board'>
        <div id ="row" className ='row'>
          <Cuadrado row = "1" column = "1"></Cuadrado>
          <Cuadrado row = "1" column = "2"></Cuadrado>
          <Cuadrado row = "1" column = "3"></Cuadrado>

        </div>


      </div>


    </div>
  );
}

export default App;
