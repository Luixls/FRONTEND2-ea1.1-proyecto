import React, { useState, useEffect } from 'react';
import ListaProductos from './componentes/ListaProductos';
import FormularioProducto from './componentes/FormularioProducto';
import Notificacion from './componentes/Notificacion';
import { obtenerProductos, guardarProductos } from './utilidades/almacenamiento';

function App() {
  const [filtro, setFiltro] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null); // Para editar producto

  useEffect(() => {
    const productosGuardados = obtenerProductos();
    setProductos(productosGuardados);
  }, []);

  const handleProductoAgregado = (nuevoProducto) => {
    const productosActualizados = [...productos, nuevoProducto];
    setProductos(productosActualizados); 
    guardarProductos(productosActualizados); 
    setMensaje('Producto agregado exitosamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  const handleEliminarProducto = (idProducto) => {
    const productosActualizados = productos.filter(producto => producto.id !== idProducto);
    setProductos(productosActualizados); 
    guardarProductos(productosActualizados); 
    setMensaje('Producto eliminado exitosamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  // Manejar cuando un producto es editado
  const handleEditarProducto = (producto) => {
    setProductoEditado(producto); // Establecer el producto actual a editar
  };

  const handleGuardarEdicion = (productoActualizado) => {
    const productosActualizados = productos.map(producto =>
      producto.id === productoActualizado.id ? productoActualizado : producto
    );
    setProductos(productosActualizados);
    guardarProductos(productosActualizados);
    setMensaje('Producto editado exitosamente');
    setProductoEditado(null); // Limpiar el producto editado después de guardar
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>

      {mensaje && <Notificacion mensaje={mensaje} tipo="success" />}

      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Buscar productos" 
          className="border p-2 w-full" 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select 
          className="border p-2 w-full mt-2"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>

      {/* Pasamos el producto editado y la función para guardar los cambios */}
      <FormularioProducto 
        onProductoAgregado={handleProductoAgregado} 
        productoEditado={productoEditado} 
        onGuardarEdicion={handleGuardarEdicion} 
      />

      <ListaProductos 
        productos={productos} 
        filtro={filtro} 
        busqueda={busqueda} 
        onEliminarProducto={handleEliminarProducto} 
        onEditarProducto={handleEditarProducto} 
      />
    </div>
  );
}

export default App;
