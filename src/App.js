import logo from './logo.svg';
import './App.css';
import Saludo from  './Saludo.js';
import Calculadora from './Calculadora.js';
import Profile from './Profile.js';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo nombre ="Roberto"/>
      </header>
    </div>
    <div>
      <h2>esto es mi primera prueba de calculadora</h2>
      <Calculadora num1="5" num2="10"/>
    </div>
    <div>
       <h1><Profile></Profile></h1>

    </div>
  </>

  )
}

export default App;
