import logo from './logo.svg';
import './App.css';
import Saludo from  './Saludo.js';
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
      <p>esto es mi primera prueba de react</p>
    </div>
  </>

  )
}

export default App;
