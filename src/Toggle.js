// src/components/ToggleVisibilidad.js

import React, { useState } from 'react';

const ToggleVisibilidad = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar' : 'Mostrar'} elemento
      </button>
      {isVisible && <p>Este es el elemento visible.</p>}
    </div>
  );
};

export default ToggleVisibilidad;
