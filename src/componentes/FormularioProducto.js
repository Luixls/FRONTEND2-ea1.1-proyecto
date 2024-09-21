import React, { useState, useEffect } from 'react';
import Producto from '../modelos/Producto';

const FormularioProducto = ({ onProductoAgregado, productoEditado, onGuardarEdicion }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState('');

  // Si estamos editando un producto, llenamos los campos con los valores actuales
  useEffect(() => {
    if (productoEditado) {
      setNombre(productoEditado.nombre);
      setCategoria(productoEditado.categoria);
      setCantidad(productoEditado.cantidad);
    } else {
      setNombre('');
      setCategoria('');
      setCantidad('');
    }
  }, [productoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !categoria || !cantidad) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Si estamos editando, guardamos los cambios
    if (productoEditado) {
      const productoActualizado = { ...productoEditado, nombre, categoria, cantidad: Number(cantidad) };
      onGuardarEdicion(productoActualizado);
    } else {
      // Si no estamos editando, agregamos un nuevo producto
      const nuevoProducto = new Producto(Date.now(), nombre, categoria, Number(cantidad));
      onProductoAgregado(nuevoProducto);
    }

    // Limpiar los campos
    setNombre('');
    setCategoria('');
    setCantidad('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
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
        <label className="block text-sm font-bold">Cantidad</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded" 
          value={cantidad} 
          onChange={(e) => setCantidad(e.target.value)} 
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {productoEditado ? 'Guardar Cambios' : 'Agregar Producto'}
      </button>
    </form>
  );
};

export default FormularioProducto;
