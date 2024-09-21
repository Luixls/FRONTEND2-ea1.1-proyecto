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

  // Cargar productos desde LocalStorage cuando el componente se monta
  useEffect(() => {
    const productosGuardados = obtenerProductos();
    setProductos(productosGuardados);
  }, []);

  // Función que se llama cuando se agrega un nuevo producto
  const handleProductoAgregado = (nuevoProducto) => {
    const productosActualizados = [...productos, nuevoProducto];
    setProductos(productosActualizados); // Actualizar el estado con el nuevo producto
    guardarProductos(productosActualizados); // Guardar en LocalStorage
    setMensaje('Producto agregado exitosamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  // Función para eliminar un producto
  const handleEliminarProducto = (idProducto) => {
    const productosActualizados = productos.filter(producto => producto.id !== idProducto);
    setProductos(productosActualizados); // Actualizar el estado sin el producto eliminado
    guardarProductos(productosActualizados); // Actualizar LocalStorage
    setMensaje('Producto eliminado exitosamente');
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

      {/* Pasamos la lista de productos y la función para eliminar productos */}
      <FormularioProducto onProductoAgregado={handleProductoAgregado} />
      <ListaProductos productos={productos} filtro={filtro} busqueda={busqueda} onEliminarProducto={handleEliminarProducto} />
    </div>
  );
}

export default App;
