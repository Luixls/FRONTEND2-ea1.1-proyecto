import React, { useState } from 'react';
import Producto from '../modelos/Producto';
import { guardarProductos, obtenerProductos } from '../utilidades/almacenamiento';

const FormularioProducto = ({ onProductoAgregado }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = new Producto(Date.now(), nombre, categoria, precio);
    const productosExistentes = obtenerProductos();
    productosExistentes.push(nuevoProducto);
    guardarProductos(productosExistentes);

    onProductoAgregado();
    setNombre('');
    setCategoria('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-bold">Nombre</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold">Categoría</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold">Precio</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)} 
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Producto</button>
    </form>
  );
};

export default FormularioProducto;
