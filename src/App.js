// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contador from './Contador';
import Formulario from './Formulario';
import Toggle from './Toggle';
import Lista from './Lista';
import Buscador from './Buscador';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Ejercicios React</h1>
        <nav>
          <Link to="/contador">Ejercicio 1: Contador</Link> |{" "}
          <Link to="/formulario">Ejercicio 2: Formulario Simple</Link> |{" "}
          <Link to="/toggle">Ejercicio 3: Toggle Visibilidad</Link> |{" "}
          <Link to="/lista">Ejercicio 4: Lista de Tareas</Link> |{" "}
          <Link to="/buscador">Ejercicio 5: Buscador de Productos</Link>
        </nav>
        <Routes>
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/Toggle" element={<Toggle/>} />
          <Route path="/Lista" element={<Lista />} />
          <Route path="/Buscador" element={<Buscador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
