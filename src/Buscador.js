// src/components/BuscadorProductos.js

import React, { useState } from 'react';

const productos = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Monitor",
  "Teclado",
  "Ratón",
  "Auriculares"
];

const BuscadorProductos = () => {
  const [search, setSearch] = useState('');
  const filteredProducts = productos.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar producto"
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuscadorProductos;
