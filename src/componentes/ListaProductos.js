import React from 'react';

const ListaProductos = ({ productos, filtro, busqueda, onEliminarProducto }) => {

  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (filtro ? producto.categoria === filtro : true)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map(producto => (
          <div key={producto.id} className="p-4 border rounded-lg">
            <h3 className="text-lg font-bold">{producto.nombre}</h3>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            {/* Botón para eliminar producto */}
            <button
              onClick={() => onEliminarProducto(producto.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ListaProductos;
