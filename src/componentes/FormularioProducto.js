import React, { useState } from 'react';
import Producto from '../modelos/Producto';

const FormularioProducto = ({ onProductoAgregado }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState(''); 
  const [cantidad, setCantidad] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que se ingresen todos los datos
    if (!nombre || !categoria || !cantidad) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Convertimos el valor de cantidad a un número antes de pasar el producto
    const nuevoProducto = new Producto(Date.now(), nombre, categoria, Number(cantidad));
    onProductoAgregado(nuevoProducto); 

    // Limpiar los campos del formulario
    setNombre('');
    setCategoria('');
    setCantidad('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Campo Categoría (Dropdown) */}
      <div className="mb-4">
        <label className="block text-sm font-bold">Categoría</label>
        <select 
          className="w-full p-2 border rounded" 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Ropa">Ropa</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>

      {/* Campo Nombre */}
      <div className="mb-4">
        <label className="block text-sm font-bold">Nombre</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>

      {/* Campo Cantidad */}
      <div className="mb-4">
        <label className="block text-sm font-bold">Cantidad</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded" 
          value={cantidad} 
          onChange={(e) => setCantidad(e.target.value)} 
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Agregar Producto</button>
    </form>
  );
};

export default FormularioProducto;
