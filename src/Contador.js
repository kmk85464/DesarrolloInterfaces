import React, { useState } from 'react';

const Counter = () => {
  // Estado para almacenar el número
  const [count, setCount] = useState(0);

  // Función para incrementar el número
  const increment = () => setCount(count + 1);

  // Función para decrementar el número
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: '10px' }}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
