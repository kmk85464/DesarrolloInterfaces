import logo from './logo.svg';
import './App.css';
import Saludo from  './Saludos.js';
import Despedida from  './Despedida.js';
function App() {

  const nombreUsuario = "Roberto"; // Nombre del usuario
  const mostrarSaludo = false; // Constante que controla el mensaje a mostrar

  return (
    <div>
    {mostrarSaludo ? <Saludo nombre={nombreUsuario} /> : <Despedida nombre={nombreUsuario} />}
    </div>
  );
}

export default App;
