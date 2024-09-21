import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../utilidades/almacenamiento';

const ListaProductos = ({ filtro, busqueda }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosGuardados = obtenerProductos();
    setProductos(productosGuardados);
  }, []);

  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (filtro ? producto.categoria === filtro : true)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productosFiltrados.map(producto => (
        <div key={producto.id} className="p-4 border rounded-lg">
          <h3 className="text-lg font-bold">{producto.nombre}</h3>
          <p>Categoría: {producto.categoria}</p>
          <p>Precio: ${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
