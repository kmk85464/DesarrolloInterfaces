// src/components/FormularioSimple.js

import React, { useState } from 'react';

const FormularioSimple = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {submittedName && <p>¡Bienvenido, {submittedName}!</p>}
    </div>
  );
};

export default FormularioSimple;
